import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => (
  <>
    <Header />
    <div id="content">
      <div className="container">
        <Outlet />
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;
