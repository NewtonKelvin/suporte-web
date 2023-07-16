"use client";
import { RootState } from "@/app/store";
import { setActiveMenu } from "@/redux/sidebar/slice";
import {
	addChatMessage,
	setOnlineUsers,
	socketChatType
} from "@/redux/socket/slice";
import { UserType } from "@/types/socket";
import { ArrowForward, FiberManualRecord } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Messages = () => {
	const { socket, online, chat } = useSelector(
		(state: RootState) => state.socket
	);
	const { user } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const sendMessage = () => {
		socket.emit("sendMessage", {
			username: user.name,
			message: "Teste 123"
		});
	};

	const sendUserList = (users: UserType[]) => {
		dispatch(setOnlineUsers(users));
	};

	const getMessage = (chat: socketChatType) => {
		dispatch(addChatMessage(chat));
		console.log(`From ${chat.username}: ${chat.message}`);
	};

	useEffect(() => {
		dispatch(setActiveMenu("Messages"));
		socket.on("getMessage", getMessage);
		socket.on("sendUserList", sendUserList);
		return () => {
			socket.off("getMessage", getMessage);
			socket.off("sendUserList", sendUserList);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [socket]);

	return (
		<div className="flex flex-col">
			<button
				onClick={sendMessage}
				className="flex h-8 items-center justify-center rounded-lg bg-primary px-2 text-primary-dark hover:bg-blue-600"
				type="submit"
			>
				Message teste
				<ArrowForward className="h-4" />
			</button>
			<br />
			<hr />
			<br />
			<h1 className="font-bold">Online users:</h1>
			<ul>
				{online.length ? (
					online.map((user, index) => (
						<li key={index} className="flex flex-row">
							<FiberManualRecord className="h-2 w-2 text-green-500" />
							<span className="font-bold">{user.userName}: &nbsp; </span>
							<span>{user.socketId}</span>
						</li>
					))
				) : (
					<li>Nenhum usuário online</li>
				)}
			</ul>
			<br />
			<hr />
			<br />
			<h1 className="font-bold">Chat:</h1>
			<ul>
				{chat.map((item, index) => (
					<li key={index}>
						<span className="font-bold">{item.username}: &nbsp; </span>
						<span>{item.message}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Messages;
