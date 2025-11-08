import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md">
      <NavLink
        to="/"
        className="p-2 rounded-lg bg-white flex items-center justify-center font-bold shadow-md mb-3 md:mb-0"
      >
        <p className="blue-gradient_text">LaeeqtheDev</p>
      </NavLink>

      <nav className="flex flex-col md:flex-row text-lg gap-4 md:gap-7 font-medium items-center">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
        >
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

        <a
          href="https://drive.google.com/uc?export=download&id=1p4qzeXogaF4kyZhsQjZlMfP_3iqKLgl_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-green-500"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
