import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-2xl font-semibold dark:text-white">Logo</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? " " : "dark:text-white"
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="navbar-default"
          className="md:hidden bg-white dark:bg-gray-900 p-4"
        >
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 dark:text-blue-400"
                    : "dark:text-white"
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
