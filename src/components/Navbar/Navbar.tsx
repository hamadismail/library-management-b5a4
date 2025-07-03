import { Link, NavLink } from "react-router";
import { ModeToggle } from "./ModeToggle";
import "./navbar.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      path: "/",
      name: "All Books",
    },
    {
      path: "/create-book",
      name: "Add Book",
    },
    {
      path: "/borrow-summary",
      name: "Borrow Summary",
    },
  ];

  return (
    <div className="border-b shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {open ? (
            <X
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer md:hidden z-20"
            />
          ) : (
            <Menu
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer md:hidden z-20"
            />
          )}

          <Link to="/" className="text-2xl font-bold text-primary">
            LMS
          </Link>
        </div>

        {/* For Mobile Menu */}
        <div
          className={`${
            open ? "top-0" : "-top-96"
          } fixed left-0 w-full bg-muted p-4 z-10 rounded flex flex-col gap-2 items-center shadow transition-all duration-300`}
        >
          {links.map((link, idx) => (
            <NavLink
              onClick={() => setOpen(false)}
              className="hover:text-primary transition-colors"
              key={idx}
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link, idx) => (
            <NavLink
              className="hover:text-primary transition-colors"
              key={idx}
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div>
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
