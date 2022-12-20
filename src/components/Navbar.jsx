import { useState } from "react";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="menu w-full flex justify-between items-center relative z-20">
      <ul className="menu-items ">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`menu-item font-poppins font-normal block cursor-pointer xs:text-9xl text-7xl 
              text-secondary transition-opacity duration-500 ease ${styles.padding} |
              ${active === nav.title && 'active'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

    </nav>
  )
}
export default Navbar;
