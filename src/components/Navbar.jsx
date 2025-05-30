import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="p-2 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">LaeeqtheDev</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          About
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>

        <a
          href="https://linktr.ee/syedlaeeqahmed"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-yellow-500"
        >
          Socials
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
