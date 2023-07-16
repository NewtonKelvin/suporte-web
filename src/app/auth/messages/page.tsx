"use client";
import { RootState } from "@/app/store";
import { setOnlineUsers } from "@/redux/socket/slice";
import { UserType } from "@/types/socket";
import { ArrowForward } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Messages = () => {
	const { socket, online } = useSelector((state: RootState) => state.socket);
	const { user } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	const sendMessage = () => {
		socket.emit("sendMessage", {
			sender: user.name,
			message: "Teste 123"
		});
	};

	useEffect(() => {
		socket.on("getMessage", ({ sender, message }) => {
			console.log(`From ${sender}: ${message}`);
		});
		socket.on("sendUserList", (users: UserType[]) => {
			dispatch(setOnlineUsers(users));
		});
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
			<h1>Usuários online:</h1>
			<ul>
				{online.length ? (
					online.map((user, index) => (
						<li key={index}>{`${user.userName}: ${user.socketId}`}</li>
					))
				) : (
					<li>Nenhum usuário online</li>
				)}
			</ul>
		</div>
	);
};

export default Messages;
