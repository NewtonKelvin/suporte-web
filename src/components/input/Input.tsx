import { InputHTMLAttributes } from "react";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  left?: React.ReactNode;
  rigth?: React.ReactNode;
}

const Input = ({ left, rigth, ...rest }: InputType) => {
  return (
    <div className="flex h-8 py-1 px-2 justify-between rounded-lg gap-2 items-center self-stretch bg-slate-200 dark:bg-neutral-800 text-black dark:text-white focus:border-b-2">
      {left && (
        <div className="grow-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-opacity-ligth dark:[&>svg]:fill-opacity-dark">
          {left}
        </div>
      )}
      <input
        className="grow bg-transparent focus:outline-none justify-center text-sm font-medium placeholder:text-opacity-ligth dark:placeholder:text-opacity-dark"
        {...rest}
      />
      {rigth && (
        <div className="grow-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-zinc-600 dark:[&>svg]:fill-stone-600">
          {rigth}
        </div>
      )}
    </div>
  );
};

export default Input;
