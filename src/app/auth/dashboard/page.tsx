"use client";
import { RootState } from "@/app/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1>Welcome {user.name || "fail"}!</h1>
      <Link
        className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary"
        href="/login"
      >
        Go back to login
      </Link>
    </>
  );
};
export default Dashboard;
