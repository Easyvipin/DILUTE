import AuthContainer from "@containers/AuthContainer";
import { useGetAuthQuery } from "@containers/AuthContainer/authSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

const Layout = ({ children }) => {
  const { data: user, isSuccess } = useGetAuthQuery();

  const ProtectedLayout = () => (
    <div className="box-border mx-auto overflow-hidden h-screen border-4 border-gray-800 ">
      <Navbar />
      <div className="height-90 h-5/6 flex flex-col-reverse sm:flex-row gap-4">
        <SideBar />
        <div className="overflow-y-auto h-full scrollbar-hide w-full sm:w-3/4 ">
          {children}
        </div>
      </div>
    </div>
  );

  const AuthLayout = () => <AuthContainer />;

  if (user?.user !== null && isSuccess) {
    return <ProtectedLayout />;
  }
  if (user?.user === null && isSuccess) {
    return <AuthLayout />;
  } else return <div>Loading...</div>;
};

export default Layout;
