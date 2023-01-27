import Footer from "../Footer/index";
import Navbar from "../Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="border p-4">{children}</div>
  </>
);

export default Layout;
