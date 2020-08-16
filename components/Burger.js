import React, { useState, useEffect } from "react";
import "../styles/burger.scss";
export default function Burger(props) {
    const [burgerState, setBurgerState] = useState({
        burgerOpen: "",
        isOpen: false,
    });

    let clickHandler = () => {
        if (burgerState.isOpen === false) {
            setBurgerState({
                burgerOpen: "open",
                isOpen: true,
            });
        } else {
            setBurgerState({
                burgerOpen: "",
                isOpen: false,
            });
        }
    };

    return (
        <div className="bg-container">
            <div id="home" className="bg-nav">
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
        </div>
    );
}
