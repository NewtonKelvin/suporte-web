import { RootState } from "@/app/store";
import { userLogout } from "@/redux/auth/slice";
import { toggleTheme } from "@/redux/cookies/slice";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	DarkMode,
	LightMode,
	Logout,
	Menu,
	MenuOpen,
	Search
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import Input from "../input/Input";
import Logo from "../logo/Logo";

export const searchSchema = z.object({
	search: z
		.string()
		.min(6, "Must be at least 6 characters")
		.nonempty("Text is required")
});

export type SearchType = z.infer<typeof searchSchema>;

interface NavbarType extends HTMLAttributes<HTMLDivElement> {
	sideOpen: Boolean;
	toggleSide: () => void;
}

const Navbar = ({ sideOpen, toggleSide, ...rest }: NavbarType) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isDark } = useSelector((state: RootState) => state.cookies);

	const { register, handleSubmit, reset } = useForm<SearchType>({
		resolver: zodResolver(searchSchema)
	});

	const submitForm = (data: SearchType) => {
		console.log("data", data);
		reset();
	};

	const logout = () => {
		dispatch(userLogout());
		router.push("/login");
	};

	return (
		<div {...rest}>
			<div className="flex flex-row items-center">
				<Logo className="h-7 fill-primary-light stroke-primary-dark dark:fill-primary-dark dark:stroke-primary-light" />{" "}
				<span className="font-bold">SUPORTE WEB</span>
			</div>

			<div className="flex flex-row items-center sm:hidden">
				<span className="font-bold" onClick={toggleSide}>
					{sideOpen ? <MenuOpen /> : <Menu />}
				</span>
			</div>

			<div className="hidden sm:block">
				<form onSubmit={handleSubmit(submitForm)}>
					<Input
						placeholder="Search for something..."
						type="text"
						register={register("search")}
						rigth={<Search />}
					/>
				</form>
			</div>
			<div className="hidden items-center justify-center gap-2 sm:flex">
				<div
					className="flex h-8 w-8 items-center justify-center rounded-md bg-input-light dark:bg-input-dark"
					onClick={() => dispatch(toggleTheme())}
				>
					{isDark ? (
						<LightMode className="max-w-4 max-h-4 text-opacity-light hover:text-yellow-600 dark:text-opacity-dark dark:hover:text-yellow-600" />
					) : (
						<DarkMode className="max-w-4 max-h-4 text-opacity-light hover:text-sky-600 dark:text-opacity-dark dark:hover:text-sky-600" />
					)}
				</div>
				<div
					className="flex h-8 w-8 items-center justify-center rounded-md bg-input-light dark:bg-input-dark"
					onClick={logout}
				>
					<Logout className="max-w-4 max-h-4 text-opacity-light hover:text-red-600 dark:text-opacity-dark dark:hover:text-red-600" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
