"use client";
import { RootState } from "@/app/store";
import { userLogout } from "@/redux/auth/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
	const { user } = useSelector((state: RootState) => state.user);
	const { socket } = useSelector((state: RootState) => state.socket);
	const router = useRouter();
	const dispatch = useDispatch();

	const logout = () => {
		socket.disconnect();
		dispatch(userLogout());
		router.push("/login");
	};

	return (
		<div className="block">
			<h1>Welcome {user.name || "fail"}!</h1>
			<Link
				className="text-opacity-light hover:text-primary dark:text-opacity-dark dark:hover:text-primary"
				href="/login"
			>
				Go back to login
			</Link>
			<p
				className="text-opacity-light hover:cursor-pointer hover:text-red-500 dark:text-opacity-dark dark:hover:text-red-500"
				onClick={logout}
			>
				Logout
			</p>
		</div>
	);
};
export default Dashboard;
