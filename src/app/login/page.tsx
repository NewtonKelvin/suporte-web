import CustomSwitch from "@/components/switch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Lorem ipsum dolor sit amet",
};

const Page = () => {
  return (
    <>
      <span>Login page</span>
      <CustomSwitch />
    </>
  );
};

export default Page;
