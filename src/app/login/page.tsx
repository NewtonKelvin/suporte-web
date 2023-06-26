"use client";
import Input from "@/components/input/Input";
import Logo from "@/components/logo/Logo";
import CustomSwitch from "@/components/switch/Switch";
import { userLogin } from "@/redux/auth/slice";
import { toggleTheme } from "@/redux/cookies/slice";
import { show } from "@/redux/snackbar/slice";
import { api } from "@/services/api";
import { authUserResponse } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowForward,
  Face,
  Fingerprint,
  Flare,
  NightsStay
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import "dotenv/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { RootState } from "../store";

const loginSchema = z.object({
  login: z
    .string()
    .min(6, "Login must be at least 6 characters")
    .nonempty("Login is required"),
  password: z
    .string()
    .min(6, "Password must be at least 8 characters")
    .nonempty("Password is required")
});

export type LoginType = z.infer<typeof loginSchema>;

const Page = () => {
  const { isDark } = useSelector((state: RootState) => state.cookies);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema)
  });

  const router = useRouter();

  const submitForm = async ({ login, password }: LoginType) => {
    await api
      .get<authUserResponse>("/user", {
        params: new URLSearchParams({ login, password })
      })
      .then(({ data }) => {
        dispatch(
          show({
            type: data.error ? "warning" : "success",
            title: data.error ? "Login not found" : "Login successfully",
            details: "Redirecting..."
          })
        );
        if (data.auth) {
          // Set user auth
          dispatch(
            userLogin({
              auth: data.auth,
              token: data.token,
              user: data.user
            })
          );
          reset();
          router.push("/dashboard");
        }
      })
      .catch((err: AxiosError<authUserResponse>) => {
        dispatch(
          show({
            type: "error",
            title: `Login fail: ${err.response?.data.message}`,
            details: !err.response?.data.message ? err.message : null
          })
        );
      });
  };

  return (
    <>
      <div className="flex flex-col w-full justify-between sm:px-5 sm:py-7 p-2 items-center h-full">
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
          <form
            className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-1/2 xl:w-1/3 flex flex-col gap-2"
            onSubmit={handleSubmit(submitForm)}
            autoComplete="off"
            noValidate
          >
            <div className="flex flex-col">
              <label className="px-2 py-1 m-0 text-sm font-medium">
                Login:
              </label>
              <Input
                register={register("login")}
                left={<Face />}
                type="text"
                id="login"
                placeholder="teste..."
              />
              {errors.login && (
                <span className="text-red-500 px-2 py-1 m-0 text-xs font-medium">
                  {errors.login.message}
                </span>
              )}
              <label className="p-2 text-sm font-medium">Password:</label>
              <Input
                register={register("password")}
                left={<Fingerprint />}
                type="password"
                id="password"
                placeholder="teste..."
                autoComplete="off"
              />
              {errors.password && (
                <span className="text-red-500 p-2 m-0 text-xs font-medium">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              className="flex justify-center items-center bg-primary hover:bg-blue-600 text-primary-dark rounded-lg h-8"
              type="submit"
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
