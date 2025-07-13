import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";
import { navData } from "../Data/Data";
import { useCart } from "../store/cartStore";
import { IoIosSettings } from "react-icons/io";

import logo from "../assets/logo.svg";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const cart = useCart((state) => state.cartItem);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <aside
      id="separator-sidebar"
      className={`h-screen transition-transform translate-x-0 ${
        isOpen ? "md:w-60" : "w-20"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 pl-10">
        <div className="logo flex items-center justify-center my-4">
          <img className="w-40" src={logo} alt="Logo" />
        </div>

        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-6 z-10 text-white"
            aria-label="Toggle Sidebar"
          >
            <FaBars className="text-2xl" />
          </button>
        )}

        <ul className="space-y-2 font-medium">
          {navData.map(({ path, icon, name }, index) => {
            const isCart = name === "Cart";
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 dark:text-white group ${
                      isActive ? "bg-gray-700" : ""
                    }`
                  }
                >
                  <span className="text-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white">
                    {React.createElement(icon)}
                  </span>
                  {isOpen && (
                    <span className="ms-3 flex items-center">
                      {name}
                      {isCart && totalItems > 0 && (
                        <span className="ml-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          {totalItems}
                        </span>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
          <li>
            <NavLink
              to="/userinfo"
              className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 dark:text-white group"
            >
              <IoIosSettings
                size={20}
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white"
              />
              {isOpen && <span className="ms-3">Setting</span>}
            </NavLink>
          </li>
          <li>
            <a
              onClick={logout}
              className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 dark:text-white group cursor-pointer"
            >
              <CiLogout
                size={20}
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white"
              />
              {isOpen && <span className="ms-3">LogOut</span>}
            </a>
          </li>
        </ul> */}
      </div>
    </aside>
  );
};

export default Sidebar;