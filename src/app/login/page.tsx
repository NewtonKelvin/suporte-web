"use client";
import Input from "@/components/input/Input";
import Logo from "@/components/logo/Logo";
import CustomSwitch from "@/components/switch/Switch";
import { toggleTheme } from "@/redux/cookies/slice";
import {
  ArrowForward,
  Face,
  Fingerprint,
  Flare,
  NightsStay
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const Page = () => {
  const { isDark } = useSelector((state: RootState) => state.cookies);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col justify-between sm:px-5 sm:py-7 p-2 items-center h-full">
        <div className="flex flex-col w-full items-center">
          <CustomSwitch
            deactive={<Flare className="text-yellow-600" fontSize="small" />}
            active={<NightsStay className="text-blue-600" fontSize="small" />}
            checked={isDark}
            onChange={() => dispatch(toggleTheme())}
          />
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <Logo className="fill-primary-ligth stroke-primary-dark dark:fill-primary-dark dark:stroke-primary-ligth" />
          <div className="text-center">
            <Typography fontSize={13} fontWeight={"bold"} lineHeight={"96%"}>
              Bem-vindo
            </Typography>
            <Typography fontSize={24} fontWeight={"bold"} lineHeight={"96%"}>
              Suporte Nest
            </Typography>
          </div>
          <form className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-1/2 xl:w-1/3 flex flex-col gap-2">
            <div className="flex flex-col">
              <label className="p-2 text-sm font-medium">Login:</label>
              <Input left={<Face />} type="text" placeholder="teste..." />
            </div>
            <div className="flex flex-col">
              <label className="p-2 text-sm font-medium">Password:</label>
              <Input
                left={<Fingerprint />}
                type="password"
                placeholder="teste..."
              />
            </div>

            <button
              className="flex justify-center items-center bg-primary hover:bg-blue-600 text-primary-dark rounded-lg h-8"
              type="button"
            >
              Entrar
              <ArrowForward className="h-4" />
            </button>
            <Link
              href="/login"
              className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary text-center font-medium text-xs"
            >
              Forgot your password?
            </Link>
            <Link
              href="/login"
              className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary text-center font-medium text-xs"
            >
              Dont have account?
            </Link>
          </form>
        </div>
        <div className="justify-center items-center gap-6 inline-flex">
          <div className="text-center text-opacity-ligth dark:text-opacity-dark text-xs font-semibold">
            <Link
              href="#"
              className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary text-center font-medium text-xs"
            >
              Instagram
            </Link>
          </div>
          <div className="text-center text-opacity-ligth dark:text-opacity-dark text-xs font-semibold">
            <Link
              href="#"
              className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary text-center font-medium text-xs"
            >
              Twitter
            </Link>
          </div>
          <div className="text-center text-opacity-ligth dark:text-opacity-dark text-xs font-semibold">
            <Link
              href="#"
              className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary text-center font-medium text-xs"
            >
              Contact
            </Link>
          </div>
          <div className="text-center text-opacity-ligth dark:text-opacity-dark text-xs font-semibold">
            <Link
              href="#"
              className="text-opacity-ligth dark:text-opacity-dark hover:text-primary dark:hover:text-primary text-center font-medium text-xs"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
