import "../styles/footer.scss";
import Link from 'next/link';
import { faPhone, faMapMarkerAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";

export default function Footer(props) {
    return (
        <footer>
            <div className="footer-flex">
                <main className="footer-grid">
                    <section className="left-child">
                        <section className="contacts">
                            <div className="contact-container">
                                <FontAwesomeIcon
                                    className="contacts-icon--styles"
                                    icon={faMapMarkerAlt}
                                    style={{ width: "18px" }}
                                />
                                <h3 className="contact--styles">
                                    Pittsburg California 94554, USA
                            </h3>
                            </div>
                            <div className="contact-container">
                                <FontAwesomeIcon
                                    className="contacts-icon--styles"
                                    icon={faPhone}
                                    style={{ width: "18px" }}
                                />
                                <h3 className="contact--styles">
                                    (925) 255-0098
                            </h3>
                            </div>
                            <div className="contact-container">
                                <FontAwesomeIcon
                                    className="contacts-icon--styles"
                                    icon={faAt}
                                    style={{ width: "18px" }}
                                />
                                <h3 className="contact--styles">
                                    info@authorspress.com
                            </h3>
                            </div>
                        </section>
                        <section className="bbb-img-container">
                            <a href="https://www.bbb.org/us/ca/pittsburg/profile/publishers/authors-press-1116-896738/#sealclick">
                                <img src="/blueseal.png" alt="blue seal A+ rating" className="bbb-img" />
                            </a>
                        </section>
                    </section>
                    <section className="right-child">
                        <div className="right-child-grid">
                            <sections className="socials">
                                <h3 className="scoials-title socials-title--styles">
                                    Stay Connected
                            </h3>
                                <div className="socials-flex">
                                    <FontAwesomeIcon
                                        className="social"
                                        icon={["fab", "facebook-square"]}
                                        style={{ width: "28px" }}
                                    />
                                    <FontAwesomeIcon
                                        className="social"
                                        icon={["fab", "twitter-square"]}
                                        style={{ width: "28px" }}
                                    />
                                    <FontAwesomeIcon
                                        className="social"
                                        icon={["fab", "instagram"]}
                                        style={{ width: "28px" }}
                                    />
                                    <FontAwesomeIcon
                                        className="social"
                                        icon={["fab", "youtube-square"]}
                                        style={{ width: "28px" }}
                                    />
                                </div>
                            </sections>
                            <section className="payments">
                                <h3 className="payments-title payments-title--styles">
                                    Supported Payments
                            </h3>
                                <div className="payments-flex">
                                    <FontAwesomeIcon
                                        className="payment"
                                        icon={["fab", "cc-visa"]}
                                        style={{ width: "36px" }}
                                    />
                                    <FontAwesomeIcon
                                        className="payment"
                                        icon={["fab", "cc-mastercard"]}
                                        style={{ width: "36px" }}
                                    />
                                    <FontAwesomeIcon
                                        className="payment"
                                        icon={["fab", "cc-amex"]}
                                        style={{ width: "36px" }}
                                    />
                                    <FontAwesomeIcon
                                        className="payment"
                                        icon={["fab", "cc-discover"]}
                                        style={{ width: "36px" }}
                                    />
                                </div>
                            </section>
                            <section className="footer-summary footer-summary--styles">
                                Authors Press is an online self-publishing company and book reseller catering to the needs of both published and aspiring authors. Our services are centered on providing the best solutions for our clients.
                        </section>
                        </div>
                    </section>
                </main>
            </div>
            <section className="copyright-container">
                <h3 className="copyright-txt copyright-txt--styles">
                    Copyright 2020 | Authors Press
                </h3>
                <nav className="bottom-links">
                    <Link href="/">
                        <a className="bottom-link bottom-link--styles">Testimonials</a>
                    </Link>

                    <Link href="/">
                        <a href="" className="bottom-link bottom-link--styles">Terms And Conditions</a>
                    </Link>

                    <Link href="/">
                        <a href="" className="bottom-link bottom-link--styles">Refund Policy</a>
                    </Link>

                    <Link href="/">
                        <a href="" className="bottom-link bottom-link--styles">Privacy Policy</a>
                    </Link>
                </nav>
            </section>
            <section className="arists-credit-container artist-credit-container--styles">
                <p className="artist-credit artist-credit--styles">
                    Illustrations by <motion.a className="artist-link--styles" href="https://icons8.com/">Icons 8</motion.a> from <a className="artist-link--styles" href="https://icons8.com/">Icons8</a>
                </p>
            </section>
        </footer>
    )
}