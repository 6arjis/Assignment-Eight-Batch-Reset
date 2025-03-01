import { NavLink, useLocation } from "react-router";
import { SiShopify } from "react-icons/si";
import { TiHeartFullOutline } from "react-icons/ti";
const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log(location);
  return (
    <div
      className={`${
        isHomePage
          ? "bg-purple-700 rounded-t-xl text-white"
          : "bg-white text-purple-700"
      }`}
    >
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-white text-purple-700" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-white text-purple-700" : ""
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-white text-purple-700" : ""
                  }
                  to="/vlogs"
                >
                  Vlogs
                </NavLink>
              </li>
            </ul>
          </div>
          <a className=" text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-purple-700 font-bold" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-purple-700 font-bold" : ""
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-purple-700 font-bold" : ""
                }
                to="/vlogs"
              >
                Vlogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-5">
            <li className="text-2xl">
              <SiShopify />
            </li>
            <li className="text-2xl">
              <TiHeartFullOutline />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
