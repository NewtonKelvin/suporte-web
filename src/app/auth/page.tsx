import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <Link href="/login">Go back to login</Link>
    </>
  );
};

export default Dashboard;
