import "../styles/footer.scss";
import { faPhone, faMapMarkerAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(props) {
    return (
        <footer>
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
                        <img src="/blueseal.png" alt="blue seal A+ rating" className="bbb-img" />
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
                    </div>
                </section>
            </main>
        </footer>
    )
}