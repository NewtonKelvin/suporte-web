import { RootState } from "@/app/store";
import { setMenu } from "@/redux/sidebar/slice";
import { zodResolver } from "@hookform/resolvers/zod";
import { DarkMode, LightMode, Logout, Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HTMLAttributes, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../input/Input";
import { SearchType, searchSchema } from "../navbar/Navbar";

import { userLogout } from "@/redux/auth/slice";
import { toggleTheme } from "@/redux/cookies/slice";
import {
	Assessment,
	BugReport,
	Dashboard,
	Inbox,
	SupervisedUserCircle
} from "@mui/icons-material";

const buttonClass = {
	default: "flex h-8 w-full items-center gap-2 rounded-lg p-2",
	active: "bg-primary text-slate-100 hover:bg-blue-600 hover:text-slate-50",
	deactive:
		"bg-transparent text-opacity-light hover:bg-input-light hover:text-primary-light dark:text-opacity-dark dark:hover:bg-input-dark dark:hover:text-primary-dark"
};
const iconClass = {
	default: "max-w-4 max-h-4",
	active: "",
	deactive: ""
};

interface SidebarType extends HTMLAttributes<HTMLDivElement> {
	sideOpen: Boolean;
}

const Sidebar = ({ sideOpen, ...rest }: SidebarType) => {
	const router = useRouter();
	const { user } = useSelector((state: RootState) => state.user);
	const { isDark } = useSelector((state: RootState) => state.cookies);
	const { items } = useSelector((state: RootState) => state.sidebar);
	const { socket } = useSelector((state: RootState) => state.socket);

	const dispatch = useDispatch();
	const { register, handleSubmit, reset } = useForm<SearchType>({
		resolver: zodResolver(searchSchema)
	});

	const submitForm = (data: SearchType) => {
		console.log("data", data);
		reset();
	};

	useEffect(() => {
		dispatch(
			setMenu({
				items: [
					{
						title: "Dashboard",
						link: "/dashboard",
						icon: <Dashboard className="h-4" />,
						active: false
					},
					{
						title: "Tickets",
						link: "/tickets",
						icon: <BugReport className="h-4" />,
						active: false
					},
					{
						title: "Users",
						link: "/users",
						icon: <SupervisedUserCircle className="h-4" />,
						active: false
					},
					{
						title: "Reports",
						link: "/reports",
						icon: <Assessment className="h-4" />,
						active: false
					},
					{
						title: "Messages",
						link: "/messages",
						icon: <Inbox className="h-4" />,
						active: false
					}
				]
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const logout = () => {
		socket.disconnect();
		dispatch(userLogout());
		router.push("/login");
	};

	return (
		<div {...rest}>
			<div className="inline-flex w-full items-center justify-start gap-3 py-3">
				<Image
					src={"/images/avatar.jpg?" + new Date().getTime()}
					height={48}
					width={48}
					alt="very cute avatar"
					className="rounded-full"
				/>
				<div className="w-full">
					<span className="font-semibold leading-snug text-primary-light dark:text-primary-dark">
						{user.name}
						<br />
					</span>
					<span className="font-semibold leading-tight text-opacity-light dark:text-opacity-dark">
						Unidade Alphaville
					</span>
				</div>
			</div>
			{sideOpen && (
				<div className="inline-flex w-full items-center justify-start gap-3 py-3">
					<form onSubmit={handleSubmit(submitForm)} className="w-full">
						<Input
							placeholder="Search for something..."
							type="text"
							register={register("search")}
							rigth={<Search />}
						/>
					</form>
				</div>
			)}
			<div className="flex h-full flex-col justify-between gap-1">
				<div>
					{items.map((item, index) => {
						return (
							<Link href={item.link} key={index}>
								<button
									className={`${buttonClass.default} ${
										item.active ? buttonClass.active : buttonClass.deactive
									}`}
									type="submit"
								>
									{item.icon}
									{item.title}
								</button>
							</Link>
						);
					})}
				</div>
				<div>
					<Link href="#">
						<button
							className={`${buttonClass.default} ${buttonClass.deactive}`}
							type="submit"
							onClick={() => dispatch(toggleTheme())}
						>
							{isDark ? (
								<LightMode className={iconClass.default} />
							) : (
								<DarkMode className={iconClass.default} />
							)}
							Toggle theme
						</button>
					</Link>
					<Link href="#">
						<button
							className={`${buttonClass.default} ${buttonClass.deactive}`}
							type="submit"
							onClick={logout}
						>
							<Logout className={iconClass.default} />
							Logout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
