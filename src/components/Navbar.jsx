import { navLinks } from "../constants";

const Navbar = () => {
  return (
      <nav className="menu w-full flex justify-between items-center relative z-20">
        <ul className="menu-items mt-[8rem] ">
          {navLinks.map((nav) =>
            <li
              key={nav.id}
              className={`menu-item font-poppins font-normal block cursor-pointer text-9xl text-secondary
                p-5 transition-opacity duration-500 ease`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>)}
        </ul>
      </nav>
  )
}
export default Navbar
