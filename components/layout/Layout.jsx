
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <main className="lg:flex lg:gap-[3rem] ">
      <Navbar />
      <section className="w-full">
        {children}
        <Footer />
      </section>
    </main>
  );
};
export default Layout;
