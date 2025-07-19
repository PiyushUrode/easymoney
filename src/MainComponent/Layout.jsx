
import Headroom from "react-headroom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>

      <main className="min-h-[80vh]">
        {children}
      </main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
