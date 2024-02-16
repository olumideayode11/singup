import React from 'react'
import { FaHome } from "react-icons/fa";
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-md bg-primary   ">
                <div className="container  ">
                    <a className="navbar-brand" href="/">
                        <FaHome size={35} color='red' /></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end   "
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                More
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href=".Home"
                                    >Home</a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./Signup">Signup</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./Login">Login</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >Dropdown</a
                                    >
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownId"
                                    >
                                        <a className="dropdown-item" href="#"
                                        >Action 1</a
                                        >
                                        <a className="dropdown-item" href="#"
                                        >Action 2</a
                                        >
                                    </div>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar