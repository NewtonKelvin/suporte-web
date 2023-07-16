import { NextApiResponseServerIO } from "@/types/socket";
import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

export const config = {
	api: {
		bodyParser: false
	}
};

const io = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
	if (!res.socket.server.io) {
		console.log("SOCKET: *First use, starting socket.io");
		// adapt Next's net Server to http Server
		const httpServer: NetServer = res.socket.server as any;
		const io = new ServerIO(httpServer, {
			path: "/api/socket/io",
			addTrailingSlash: false
		});
		// append SocketIO server to Next.js socket server response
		io.on("connection", (socket) => {
			// Server side Logic
			console.log("SOCKET: A user connected");
			socket.broadcast.emit("userServerConnection", socket.id);
			socket.on("sendNotif", (msg) => {
				socket.emit("sendNotif", msg);
			});
			socket.on("sendMsg", (msg, id) => {
				io.to(id).emit("sendNotif", msg);
			});
			socket.on("joinRoom", async (id) => {
				await socket.join(id);
				io.to(id).emit("sendNotif", `A user (${socket.id}) joined room`);
				socket.broadcast.emit("listOnlineUsers", id);
			});
			socket.on("leaveRoom", async (id) => {
				console.log("leave room -----");
				await socket.leave(id);
				io.to(id).emit("sendNotif", `A user left room ${id}`);
				socket.broadcast.emit("listOnlineUsers", id);
			});
			socket.on("listOnlineUsers", (id) => {
				const clientsInRoom = io.sockets.adapter.rooms.get(id);
				io.to(id).emit(
					"sendNotif",
					`${clientsInRoom ? clientsInRoom.size : 0} users are here`
				);
				console.log("listOnlineUsers");
			});
			socket.on("disconnect", () => {
				console.log("SOCKET: A user disconnected");
				socket.broadcast.emit("userServerDisconnection", socket.id);
			});
		});
		res.socket.server.io = io;
	} else {
		console.log("SOCKET: socket.io already running");
	}
	res.end();
};

export default io;
