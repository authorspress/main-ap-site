import dynamic from "next/dynamic";

import React, { useState, useEffect } from "react";
import "../styles/burger.scss";

const MobileNavbar = dynamic(() => import("./MobileNavbar"));

export default function Burger(props) {
    const [burgerState, setBurgerState] = useState({
        burgerOpen: "",
        isOpen: false,
        revealMenu: "",
        removeBorder: "keep-bottom-radius",
    });

    let clickHandler = () => {
        if (burgerState.isOpen === false) {
            setBurgerState({
                burgerOpen: "open",
                isOpen: true,
                revealMenu: "reveal",
                removeBorder: "remove-bottom-radius",
            });
        } else {
            setBurgerState({
                burgerOpen: "",
                isOpen: false,
                revealMenu: "unreveal",
                removeBorder: "keep-bottom-radius",
            });
        }
    };

    return (
        <div className="bg-container">
            <div id="home" className={`${burgerState.removeBorder} ${props.bgcolor} bg-nav`}>
                <div className="logo-container">
                    <img
                        className="ap-logo"
                        src="/ap-logo.png"
                        alt="authors press logo"
                    />
                </div>
                <div className="burger-container">
                    <a
                        onClick={clickHandler}
                        className={`${burgerState.burgerOpen} navicon-button burger burger--styles x`}
                    >
                        <div className="navicon"></div>
                    </a>
                </div>
            </div>
            <MobileNavbar state={burgerState.revealMenu} />
        </div>
    );
}
