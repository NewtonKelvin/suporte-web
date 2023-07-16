import { socketChatType } from "@/redux/socket/slice";
import {
	AddNewUserType,
	NextApiResponseServerIO,
	RoomsType
} from "@/types/socket";
import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

export const config = {
	api: {
		bodyParser: false
	}
};

let rooms: RoomsType = {
	online: []
};

const addNewUser: AddNewUserType = ({ userName, socketId }) => {
	!rooms.online.some((user) => user.userName === userName) &&
		rooms.online.push({ userName, socketId });
};

const removeUser = (socketId: string) => {
	rooms.online = rooms.online.filter((user) => user.socketId !== socketId);
};

const io = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
	if (!res.socket.server.io) {
		console.log("SOCKET: *First use, starting socket.io");
		const httpServer: NetServer = res.socket.server as any;
		const io = new ServerIO(httpServer, {
			path: "/api/socket/io",
			addTrailingSlash: false
		});
		io.on("connection", (socket) => {
			io.to("online").emit("sendUserList", rooms.online);
			socket.on("newUser", async (userName) => {
				await socket.join("online");
				addNewUser({ userName: userName, socketId: socket.id });
				io.to("online").emit("sendUserList", rooms.online);
			});
			socket.on("sendMessage", ({ username, message }: socketChatType) => {
				io.to("online").emit("getMessage", { username, message });
			});
			socket.on("getOnlineUsers", () => {
				io.to("online").emit("sendUserList", rooms.online);
			});
			socket.on("disconnect", () => {
				removeUser(socket.id);
				io.to("online").emit("sendUserList", rooms.online);
			});
		});
		res.socket.server.io = io;
	} else {
		console.log("SOCKET: socket.io already running");
	}
	res.end();
};

export default io;
