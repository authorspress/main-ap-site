import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/mobile-navbar.scss";
import { useState } from "react";

export default function MobileNavbar(props) {
    const [revealMenu, revealMenuState] = useState("");
    
    return (
        <div className={`${props.state} mobile-navbar-container`}>
            <div className="mobile-navbar">
                <Link href="/services">
                    <a className={`nav-link nav-link--styles`}>Services</a>
                </Link>
                <Link href="/bookstore">
                    <a className={`nav-link nav-link--styles`}>Bookstore</a>
                </Link>
                <Link href="/blog">
                    <a className={`nav-link nav-link--styles`}>Blog</a>
                </Link>
                <Link href="/about">
                    <a className={`nav-link nav-link--styles`}>About us</a>
                </Link>
            </div>
        </div>
    );
}
