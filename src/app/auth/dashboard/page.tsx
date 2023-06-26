"use client";
import { RootState } from "@/app/store";
import { userLogout } from "@/redux/auth/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.persistedReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = () => {
    dispatch(userLogout());
    router.push("/login");
  };
  return (
    <div className="flex flex-col gap-1">
      <h1>Welcome {user.name || "fail"}!</h1>
      <Link
        className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary"
        href="/login"
      >
        Go back to login
      </Link>
      <p
        className="text-opacity-ligth dark:text-opacity-dark hover:text-red-500 dark:hover:text-red-500 hover:cursor-pointer"
        onClick={logout}
      >
        Logout
      </p>
    </div>
  );
};
export default Dashboard;
