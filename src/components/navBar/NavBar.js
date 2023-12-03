import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";
import logo from './download.jpeg'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">

                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img src={logo} alt="dd" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
                        {/* <span>HASAB</span> */}
                        {/* <i className="fas fa-code"></i> */}
                        <span className="icon">
                            {/* <CodeIcon /> */}
                        </span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/message"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Message
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/notifications"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Notifications
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/setting"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Setting
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/calls"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Calls
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/search"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Search
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/help"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Help
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        ) : (

                            <span className="icon">
                                <HamburgetMenuOpen />{" "}
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;