import { zodResolver } from "@hookform/resolvers/zod";
import {
	Assessment,
	BugReport,
	Dashboard,
	Search,
	SupervisedUserCircle
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { SearchType, searchSchema } from "../navbar/Navbar";

type menuItemType = {
	title: string;
	icon: React.ReactNode;
	active: boolean;
	link: string;
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
	}
];

interface SidebarType extends HTMLAttributes<HTMLDivElement> {
	sideOpen: Boolean;
}

const Sidebar = ({ sideOpen, ...rest }: SidebarType) => {
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
						Kelvin Newton
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
			<div className="flex flex-col gap-1">
				{menuItens.map((item, index) => {
					return (
						<Link href={item.link} key={index}>
							<button
								className={`flex h-8 w-full items-center gap-2 rounded-lg ${
									item.active
										? "bg-primary text-slate-100 hover:bg-blue-600 hover:text-slate-50"
										: "bg-transparent text-opacity-light hover:bg-input-light hover:text-primary-light dark:text-opacity-dark dark:hover:bg-input-dark dark:hover:text-primary-dark"
								} p-2`}
								type="submit"
							>
								{item.icon}
								{item.title}
							</button>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
