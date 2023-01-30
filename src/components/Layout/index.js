import Footer from "../Footer/index";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

const Layout = ({ children }) => (
  <div className="border box-border mx-auto h-screen">
    <Navbar />
    <div className="flex flex-row gap-4 h-5/6">
      <SideBar />
      <div className="overflow-y-auto scrollbar-hide  w-3/4">{children}</div>
    </div>
  </div>
);

export default Layout;
