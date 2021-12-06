import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Products from "./Products";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  console.log(router.route);
  return (
    <div>
      <Navbar />
      <Announcement />

      {children}
      {/* {router.route !== "/products/[id]" ? <Products /> : null} */}
      {/* <Products /> */}
      <Footer />
    </div>
  );
};

export default Layout;
