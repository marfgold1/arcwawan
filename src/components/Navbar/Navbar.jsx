import { React, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/routes";
import "./Navbar.scss";

export const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const navbarRef = useRef(null);
    const toggleNavbar = () => {
        if(!navToggle){
            navbarRef.current.style.maxHeight = "0";
        } else {
            navbarRef.current.style.maxHeight = "100%";
        }
        setNavToggle(!navToggle);
    }
    return (
        <nav>
            <div id="mainNav">
                <button class="btn toggleNav" onClick={toggleNavbar}>
                    ▼
                </button>
                {mainRoutes.map((route) => {
                    if (route.hide) return (null);
                    return (
                        <NavLink
                            exact={route.exact}
                            className="nav-link"
                            activeClassName="active"
                            key={route.path+'0'}
                            to={route.path}
                        >
                            {route.label}
                        </NavLink>
                );})}
            </div>
            <div ref={navbarRef} id="sidebarNav">
                <button class="btn closeBtn link" onClick={toggleNavbar}>Tutup Navbar</button>
                {mainRoutes.map((route) => {
                    if (route.hide) return (null);
                    return (
                        <NavLink
                            exact={route.exact}
                            className="nav-link"
                            activeClassName="active"
                            key={route.path+'1'}
                            to={route.path}
                        >
                            {route.label}
                        </NavLink>
                );})}
            </div>
        </nav>
    )
}