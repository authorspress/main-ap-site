import dynamic from "next/dynamic";

import "../../styles/homeStyles/landing.scss";
import { useState } from "react";

const Burger = dynamic(() => import("../Burger"));
const DesktopNavbar = dynamic(() => import("../DekstopNavbar"));

export default function Landing(props) {
    const [burgerClicked, setBurgerClicked] = useState(false);

    return (
        <div className="landing-container">
            <Burger />
            <DesktopNavbar />
            <div className="hero-content-grid">
                <div className="child1 hero-text">
                    <h1 className="hero-title hero-title--styles">
                        You write the ENDING. WE DO EVERYTHING!
                    </h1>
                    <p className="hero-sub-text hero-sub-text--styles">
                        At Authors Press, We offer different services that will
                        assist aspiring authors in getting their books published
                        and marketed.
                    </p>
                </div>
                <div className="child2 main-img-container">
                    <img
                        className="main-img"
                        src="/examiningbook.svg"
                        alt="main image"
                    />
                </div>
            </div>
        </div>
    );
}
