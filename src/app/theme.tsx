import { setTheme } from "@/redux/cookies/slice";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const cookies = parseCookies();
  const theme = useSelector((state: RootState) => state.cookies.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("rendered");
    if (cookies.theme && cookies.theme !== undefined && cookies.theme !== null)
      dispatch(setTheme(cookies.theme));
  }, []);
  return (
    <div className={theme}>
      <div
        className={`transition-all duration-700 ease-in-out h-screen w-screen p-2 bg-background-light dark:bg-background-dark bg-center bg-cover bg-no-repeat`}
      >
        {children}
      </div>
    </div>
  );
};
export default ThemeProvider;
