import { Link, NavLink } from "react-router";
import { ModeToggle } from "./ModeToggle";
import "./navbar.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="hover:text-primary transition-colors">
        All Books
      </NavLink>
      <NavLink to="/create-book" className="hover:text-primary transition-colors">
        Add Book
      </NavLink>
      <NavLink
        to="/borrow-summary"
        className="hover:text-primary transition-colors"
      >
        Borrow Summary
      </NavLink>
    </>
  );
  return (
    <div className="border-b shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          LMS
        </Link>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {links}
        </div>

        <div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
