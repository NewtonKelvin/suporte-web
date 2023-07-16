import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseServerIO = NextApiResponse & {
	socket: Socket & {
		server: NetServer & {
			io: SocketIOServer;
		};
	};
};

//Server
export type UserType = {
	userName: string;
	socketId: string;
};
export type RoomsType = {
	online: UserType[];
};

export type AddNewUserType = {
	// eslint-disable-next-line no-unused-vars
	(args: UserType): void;
};

//Client
