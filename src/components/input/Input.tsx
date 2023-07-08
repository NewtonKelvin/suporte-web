import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegisterReturn;
	left?: React.ReactNode;
	rigth?: React.ReactNode;
}

const Input = ({ register, left, rigth, ...rest }: InputType) => {
	return (
		<div className="bg-input-light flex h-8 items-center justify-between gap-2 self-stretch rounded-lg px-2 py-1 text-black focus:border-b-2 dark:bg-input-dark dark:text-white">
			{left && (
				<div className="[&>svg]:fill-opacity-light grow-0 [&>svg]:h-5 [&>svg]:w-5 dark:[&>svg]:fill-opacity-dark">
					{left}
				</div>
			)}
			<input
				{...register}
				className="placeholder:text-opacity-light autofill:caret-primary-light autofill:text-fill-primary-light grow
        justify-center bg-transparent
        text-sm font-medium autofill:shadow-input-light focus:outline-none dark:placeholder:text-opacity-dark dark:autofill:caret-primary-dark dark:autofill:shadow-input-dark autofill:dark:text-fill-primary-dark"
				{...rest}
			/>
			{rigth && (
				<div className="grow-0 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-zinc-600 dark:[&>svg]:fill-stone-600">
					{rigth}
				</div>
			)}
		</div>
	);
};

export default Input;
