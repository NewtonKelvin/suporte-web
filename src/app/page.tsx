import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Lorem ipsum dolor sit amet",
};

export default function Home() {
  return (
    <>
      <h1>Initial page</h1>
      <Link href={"/login"}>Go to login</Link>
    </>
  );
}
