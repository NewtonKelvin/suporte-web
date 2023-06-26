import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Initial page</h1>
			<Link href={"/login"}>Go to login</Link>
		</>
	);
}
