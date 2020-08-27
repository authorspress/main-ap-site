import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

const Layout = dynamic(() => import("../components/Layout"));
const Burger = dynamic(() => import("../components/Burger"));
const MobileNavbar = dynamic(() => import("../components/MobileNavbar"));

import "../styles/servicesStyles/services-page.scss";

export default function Services() {

    const [burgerbgcolor, setBurgerbgcolor] = useState("");

    useEffect(() => {
        console.log(window.location.pathname);
        if (window.location.pathname === "/services") {
            setBurgerbgcolor("primary500");
        } else {
            setBurgerbgcolor("white");
        }
        return () => {

        }
    }, [burgerbgcolor])

    return (
        <>
            <Layout title="Services | Authors Press">
                <Burger />
                <MobileNavbar bgcolor={burgerbgcolor} />
                <header className="services-header">
                    <h1 className="header-title header-title--styles">
                        Our Services
                    </h1>
                </header>
            </Layout>
        </>
    )
}