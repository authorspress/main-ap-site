import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

const Layout = dynamic(() => import("../components/Layout"));
const Burger = dynamic(() => import("../components/Burger"));
const MobileNavbar = dynamic(() => import("../components/MobileNavbar"));
const ServiceList = dynamic(() => import("../components/ServicesList"));

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
                    <p className="header-summary header-summary--styles">
                        At Authors Press, we know the feeling of wanting to have your books and stories shown to the world. We offer different services that will assist aspiring authors in getting their books published and marketed.
                    </p>
                </header>
                <main>
                    <section className="offered-services">
                        <h2 className="offered-services-title offered-services-title--styles">
                            SERVICES WE OFFER:
                        </h2>
                        <ServiceList />
                    </section>
                    <section className="programs-grid">
                        <div className="program-left-cell">
                            <section className="program">
                                <h2 className="program-title program-title--styles">
                                    Bookstore availability program
                                </h2>
                                <p className="program-summary program-summary--styles">
                                    Let us help you display your books to where they belong – on bookshelves!
                                    <br/>
                                    <br/>
                                    At Authors Press, we give every aspiring authors the opportunity to realize their dream -- being able to see their books on the bookshelves of top bookstores. May it be an online bookstore or a brick and mortar one, we aim to put your work on bookshelves.
                                    <br />
                                    <br />
                                    We team up with the leading bookstores in the industry, both online and physical. Our team will look for available prime spaces in bookstores where your works can be displayed.
                                    <br />
                                    <br />
                                    For more info on this service, we may be reached at
                                    <span className="phone-number--styles"> (925) 255-0098.</span>
                                </p>
                            </section>
                            <section className="program">
                                <h2 className="program-title program-title--styles">
                                    Bookstore marketing program
                                </h2>
                                <p className="program-summary program-summary--styles">
                                    Our book marketing program is designed to help you get your book out there and convert to potential sales.
                                    <br />
                                    <br />
                                    In order to sell your book, you need to market it! Authors Press provides a book marketing program where we will assist you in promoting your work at every stage.
                                    <br />
                                    <br />
                                    Our team will work with you in creating a marketing strategy applicable to your work. We will also employ the appropriate marketing methods, including online promotions and even traditional marketing, to let potential readers know about the item.
                                    <br />
                                    <br />
                                    Publishing Services feature a full-color cover, grayscale interior, and perfect binding.
                                    <br/>
                                    <br/>
                                    For more info on this service, we may be reached at
                                    <span className="phone-number--styles"> (925) 255-0098.</span>
                                </p>
                            </section>
                        </div>
                        <div className="program-right-cell">
                            <div className="programs-img-container">
                                <img src="/program-img.png" alt="programs offered image" className="programs-img"/>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}