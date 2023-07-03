import {
	Assessment,
	BugReport,
	Dashboard,
	SupervisedUserCircle
} from "@mui/icons-material";
import Image from "next/image";

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

const Sidebar = ({ ...rest }) => {
	return (
		<div {...rest}>
			<div className="inline-flex items-center justify-start gap-3 py-3">
				<Image
					src={"/images/avatar.jpg?" + new Date().getTime()}
					height={48}
					width={48}
					alt="very cute avatar"
					className="rounded-full"
				/>
				<div className="w-full">
					<span className="font-semibold leading-snug text-primary-ligth dark:text-primary-dark">
						Kelvin Newton
						<br />
					</span>
					<span className="font-semibold leading-tight text-opacity-ligth dark:text-opacity-dark">
						Nest Alphaville
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				{menuItens.map((item, index) => {
					return (
						<button
							key={index}
							className={`flex h-8 w-full items-center gap-2 rounded-lg ${
								item.active
									? "bg-primary text-primary-ligth hover:bg-blue-600 dark:text-primary-dark"
									: "bg-transparent text-opacity-ligth hover:bg-input-ligth hover:text-primary-ligth dark:text-opacity-dark dark:hover:bg-input-dark dark:hover:text-primary-dark"
							} p-2`}
							type="submit"
						>
							{item.icon}
							{item.title}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
