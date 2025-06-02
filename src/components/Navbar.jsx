import React, { act, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaTableCells } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";

const links = [
  { name: "DashBoard", path: "", icon: <MdDashboard /> },
  { name: "Form", path: "form", icon: <FaWpforms /> },
  { name: "Table", path: "table", icon: <FaTableCells /> },
];

function Navbar() {
  const [activeSideBar, setActiveSideBar] = useState(false);
  return (
    <nav
      className={activeSideBar ? "active" : "inactive"}
      style={{ width: activeSideBar ? "15vw" : "5vw" }}
    >
      <button
        onClick={() => setActiveSideBar(!activeSideBar)}
        className="button"
      >
        <IoMenu />
        <div
          style={{ display: activeSideBar ? "flex" : "none" }}
          className="menu"
        >
          Menu
        </div>
      </button>
      <hr />
      <div className="links">
        {links.map((link) => {
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "link active" : "link")}
              title={link.name}
            >
              {link.icon}
              <div
                style={{ display: activeSideBar ? "flex" : "none" }}
                className="name"
              >
                {link.name}
              </div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
