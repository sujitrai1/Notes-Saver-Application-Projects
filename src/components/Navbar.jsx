
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-center py-4  space-x-20 bg-neutral-950  shadow-lg shadow-blue-300/15 ">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold text-xl hover:text-blue-600"
              : "text-white font-medium text-xl  hover:text-blue-600"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
