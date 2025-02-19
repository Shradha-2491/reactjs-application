import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isItemPage = location.pathname.startsWith("/item/");


    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="brand">
                    <a href="/" className="navbar-logo">ContentSphere</a>
                </div>
                {isItemPage && (
                    <button className="back-button" onClick={() => navigate("/")}>
                        Back
                    </button>
                )}

            </div>
        </header>
    );
};

export default Navbar;