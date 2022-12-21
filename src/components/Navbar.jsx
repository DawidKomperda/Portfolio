import { useState } from "react";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className={`menu w-full flex justify-between items-center relative z-20 ${styles.padding}`}>
      <ul className="menu-items ">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`menu-item font-poppins font-normal block cursor-pointer text-5xl ss:text-8xl md:text-9xl 
             transition-opacity duration-500 ease  ${styles.padding} |
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
