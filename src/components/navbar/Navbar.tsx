import { zodResolver } from "@hookform/resolvers/zod";
import { LightMode, Logout, Search } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../input/Input";
import Logo from "../logo/Logo";

const searchSchema = z.object({
	search: z
		.string()
		.min(6, "Must be at least 6 characters")
		.nonempty("Text is required")
});

export type SearchType = z.infer<typeof searchSchema>;

const Navbar = ({ ...rest }) => {
	const { register, handleSubmit, reset } = useForm<SearchType>({
		resolver: zodResolver(searchSchema)
	});

	const submitForm = (data: SearchType) => {
		console.log("data", data);
		reset();
	};

	return (
		<div {...rest}>
			<div className="flex flex-row items-center">
				<Logo className="h-7 fill-primary-ligth stroke-primary-dark dark:fill-primary-dark dark:stroke-primary-ligth" />{" "}
				<span className="font-bold">SUPORTE WEB</span>
			</div>
			<div>
				<form onSubmit={handleSubmit(submitForm)}>
					<Input
						placeholder="Search for something..."
						type="text"
						register={register("search")}
						rigth={<Search />}
					/>
				</form>
			</div>
			<div className="flex items-center justify-center gap-2">
				<div className="flex h-8 w-8 items-center justify-center rounded-md bg-input-ligth dark:bg-input-dark">
					<LightMode className="max-w-4 max-h-4 text-opacity-ligth  hover:text-yellow-600 dark:text-opacity-dark dark:hover:text-yellow-600" />
				</div>
				<div className="flex h-8 w-8 items-center justify-center rounded-md bg-input-ligth dark:bg-input-dark">
					<Logout className="max-w-4 max-h-4 text-opacity-ligth  hover:text-red-600 dark:text-opacity-dark dark:hover:text-red-600" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
