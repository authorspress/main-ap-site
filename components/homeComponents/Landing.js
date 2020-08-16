import dynamic from "next/dynamic";

import "../../styles/homeStyles/landing.scss";

const Burger = dynamic(() => import("../Burger"));

export default function Landing(props) {
    return (
        <div className="landing-container">
            <Burger />
            <div className="hero-text">
                <h1 className="hero-title hero-title--styles">
                    You write the ENDING. WE DO EVERYTHING!
                </h1>
                <p className="hero-sub-text hero-sub-text--styles">
                    At Authors Press, We offer different services that will
                    assist aspiring authors in getting their books published and
                    marketed.
                </p>
            </div>
            <div className="main-img-container">
                <img className="main-img" src="/examiningbook.svg" alt="main image"/>
            </div>
        </div>
    );
}
