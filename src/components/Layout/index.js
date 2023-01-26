import Footer from "../Footer/index";
import Navbar from "../Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
