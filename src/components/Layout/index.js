import Footer from "../Footer/index";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

const Layout = ({ children }) => (
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

export default Layout;
