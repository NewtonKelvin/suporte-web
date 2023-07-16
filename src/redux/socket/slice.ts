import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io";
import { io as ClientIO } from "socket.io-client";

type socketUserType = {
	socketId: string;
	userName: string;
};
type socketStoreType = {
	socket: Socket;
	online: socketUserType[];
};

const initialState: socketStoreType = {
	socket: new (ClientIO as any)(process.env.NEXT_PUBLIC_SITE_URL, {
		path: "/api/socket/io",
		addTrailingSlash: false
	}),
	online: []
};

export const socketStore = createSlice({
	name: "socketStore",
	initialState,
	reducers: {
		setSocket: (state, action: PayloadAction<Socket>) => {
			state.socket = action.payload;
			state.online = state.online;
		},
		setOnlineUsers: (state, action: PayloadAction<socketUserType[]>) => {
			state.socket = state.socket;
			state.online = action.payload;
		}
	}
});

export const { setOnlineUsers, setSocket } = socketStore.actions;
export default socketStore.reducer;
