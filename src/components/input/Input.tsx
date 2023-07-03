import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegisterReturn;
	left?: React.ReactNode;
	rigth?: React.ReactNode;
}

const Input = ({ register, left, rigth, ...rest }: InputType) => {
	return (
		<div className="flex h-8 items-center justify-between gap-2 self-stretch rounded-lg bg-slate-200 px-2 py-1 text-black focus:border-b-2 dark:bg-neutral-800 dark:text-white">
			{left && (
				<div className="grow-0 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-opacity-ligth dark:[&>svg]:fill-opacity-dark">
					{left}
				</div>
			)}
			<input
				{...register}
				className="grow justify-center bg-transparent text-sm
        font-medium placeholder:text-opacity-ligth
        autofill:caret-primary-ligth autofill:shadow-input-ligth autofill:text-fill-primary-ligth focus:outline-none dark:placeholder:text-opacity-dark dark:autofill:caret-primary-dark dark:autofill:shadow-input-dark autofill:dark:text-fill-primary-dark"
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
