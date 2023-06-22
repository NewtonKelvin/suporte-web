"use client";
import CustomSwitch from "@/components/switch/Switch";
import { toggleTheme } from "@/redux/cookies/slice";
import { Metadata } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

export const metadata: Metadata = {
  title: "Login",
  description: "Lorem ipsum dolor sit amet",
};

const Page = () => {
  const { isDark } = useSelector((state: RootState) => state.cookies);
  const dispatch = useDispatch();

  return (
    <>
      <span>Login page</span>
      <CustomSwitch checked={isDark} onChange={() => dispatch(toggleTheme())} />
    </>
  );
};

export default Page;
