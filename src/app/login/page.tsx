"use client";
import CustomSwitch from "@/components/switch/Switch";
import { toggleTheme } from "@/redux/cookies/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const Page = () => {
  const { isDark } = useSelector((state: RootState) => state.cookies);
  const dispatch = useDispatch();

  return (
    <>
      <span>Login page</span>
      <CustomSwitch
        leftValue="Ligth"
        rigthValue="Dark"
        checked={isDark}
        onChange={() => dispatch(toggleTheme())}
      />
    </>
  );
};

export default Page;
