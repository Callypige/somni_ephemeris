import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoEdit from "./ImgsSidebar/edit.svg";
import FolderIcon from "./ImgsSidebar/folder.svg";
import Tools from "./ImgsSidebar/settings.svg";
import Menu from "./ImgsSidebar/menu.svg";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Somni Ephemeris</div>
      <ul className="sidebar-list">
        <li>
          <Link to="/" className="sidebar-link">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/add" className="sidebar-link">
            Créer un nouveau rêve
          </Link>
        </li>
      </ul>
    </div>
  );
}
