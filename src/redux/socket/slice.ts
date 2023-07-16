import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io";
import { io as ClientIO } from "socket.io-client";

type socketUserType = {
	socketId: string;
	userName: string;
};
export type socketChatType = {
	username: string;
	message: string;
	date: Date;
};
type socketStoreType = {
	socket: Socket;
	online: socketUserType[];
	chat: socketChatType[];
};

const initialState: socketStoreType = {
	socket: new (ClientIO as any)(process.env.NEXT_PUBLIC_SITE_URL, {
		path: "/api/socket/io",
		addTrailingSlash: false,
		cors: {
			origin: process.env.NEXT_PUBLIC_SITE_URL
		}
	}),
	online: [],
	chat: []
};

export const socketStore = createSlice({
	name: "socketStore",
	initialState,
	reducers: {
		setSocket: (state, action: PayloadAction<Socket>) => {
			state.socket = action.payload;
			state.online = state.online;
			state.chat = state.chat;
		},
		setOnlineUsers: (state, action: PayloadAction<socketUserType[]>) => {
			state.online = action.payload;
			state.socket = state.socket;
			state.chat = state.chat;
		},
		addChatMessage: (state, action: PayloadAction<socketChatType>) => {
			state.chat = [...state.chat, action.payload];
			state.socket = state.socket;
			state.online = state.online;
		}
	}
});

export const { setOnlineUsers, setSocket, addChatMessage } =
	socketStore.actions;
export default socketStore.reducer;
