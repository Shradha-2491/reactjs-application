import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <div className="brand">
                        <a href="/" className="navbar-logo">ContentSphere</a>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Navbar;
