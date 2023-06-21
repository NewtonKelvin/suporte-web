import { useSelector } from "react-redux";
import { RootState } from "./store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.cookies.theme);
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
