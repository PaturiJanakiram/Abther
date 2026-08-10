import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
    { name: "About", id: "about" },
    { name: "Platforms", id: "platforms" },   
    { name: "Team", id: "team" },
    { name: "Impact", id: "impact" },
    { name: "Investors", id: "investors" },  
];

function Navbar() {
    const [mobile, setMobile] = useState(false);
    const [active, setActive] = useState("about");
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setSticky(window.scrollY > 50);

            const sections = menuItems.map((item) =>
                document.getElementById(item.id)
            );

            sections.forEach((section) => {
                if (!section) return;

                if (
                    window.scrollY >= section.offsetTop - 100 &&
                    window.scrollY < section.offsetTop + section.offsetHeight
                ) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollSection = (id) => {
        setMobile(false);

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className={sticky ? "navbar sticky" : "navbar"}>
            <div className="nav-container">

                <div className="logo">
                    <img
                        src={logo}
                        alt="AbTher Biotech"
                        className="logo-img"
                    />

                    <div className="logo-content">

                        <h2 className="logo-title">
                            AbTher Biotech
                        </h2>

                        <p className="logo-subtitle">
                            Precision Diagnostics &amp; Therapeutics
                        </p>

                    </div>
                </div>

                <ul className={mobile ? "nav-links active" : "nav-links"}>

                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className={active === item.id ? "active" : ""}
                                onClick={() => scrollSection(item.id)}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}

                    <li>
                        <button
                            className="contact-btn"
                            onClick={() => scrollSection("contact")}
                        >
                            Get in touch
                        </button>
                    </li>

                </ul>

                <div
                    className="mobile-icon"
                    onClick={() => setMobile(!mobile)}
                >
                    {mobile ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
