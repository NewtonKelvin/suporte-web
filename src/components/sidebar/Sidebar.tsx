import { RootState } from "@/app/store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Assessment,
	BugReport,
	DarkMode,
	Dashboard,
	Inbox,
	LightMode,
	Logout,
	Search,
	SupervisedUserCircle
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Input from "../input/Input";
import { SearchType, searchSchema } from "../navbar/Navbar";

type menuItemType = {
	title: string;
	icon: React.ReactNode;
	active: boolean;
	link: string;
};

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

let menuItens: menuItemType[] = [
	{
		title: "Dashboard",
		link: "/dashboard",
		icon: <Dashboard className="h-4" />,
		active: true
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
];

interface SidebarType extends HTMLAttributes<HTMLDivElement> {
	sideOpen: Boolean;
}

const Sidebar = ({ sideOpen, ...rest }: SidebarType) => {
	const { user } = useSelector((state: RootState) => state.user);
	const { isDark } = useSelector((state: RootState) => state.cookies);
	const { register, handleSubmit, reset } = useForm<SearchType>({
		resolver: zodResolver(searchSchema)
	});

	const submitForm = (data: SearchType) => {
		console.log("data", data);
		reset();
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
						Nest Alphaville
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
					{menuItens.map((item, index) => {
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
