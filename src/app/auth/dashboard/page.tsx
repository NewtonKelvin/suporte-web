"use client";
import { RootState } from "@/app/store";
import { userLogout } from "@/redux/auth/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
	const { user } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const router = useRouter();
	const logout = () => {
		dispatch(userLogout());
		router.push("/login");
	};
	return (
		<div className="flex flex-col gap-1">
			<h1>Welcome {user.name || "fail"}!</h1>
			<Link
				className="text-opacity-ligth hover:text-primary dark:text-opacity-dark dark:hover:text-primary"
				href="/login"
			>
				Go back to login
			</Link>
			<p
				className="text-opacity-ligth hover:cursor-pointer hover:text-red-500 dark:text-opacity-dark dark:hover:text-red-500"
				onClick={logout}
			>
				Logout
			</p>
		</div>
	);
};
export default Dashboard;
