import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex h-float w-float flex-col items-center justify-center rounded-md bg-container-light text-white dark:bg-container-dark">
			<div className="flex w-auto flex-col text-center">
				<span>🤔 NOT FOUND</span>
				<Link
					className="text-opacity-light hover:text-primary dark:text-opacity-dark dark:hover:text-primary"
					href="/login"
				>
					Go back to login
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
