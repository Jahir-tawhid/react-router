import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-700 flex justify-center items-center gap-6 md:gap-4 px-4 py-2 text-white font-bold">
      <Link to={"/home"}>Home </Link>
      <Link to={"/product"}>Products</Link>
      <Link to={"/blog"}>Blogs</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact Us</Link>
    </div>
  );
};

export default Navbar;
