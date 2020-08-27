import "../../styles/homeStyles/free-section.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FreeSection(props) {
    return (
        <div className="free-section-container">
            <div className="free-section-grid">
                <section className="assistance-grid">
                    <div className="free-img-container">
                        <img src="/assistance.png" alt="lifetime assistance image" className="assistance-img" />
                    </div>
                    <div className="free-txt-container">
                        <h1 className="free-title free-title--styles">
                            LIFETIME
                            FREE ASSISTANCE
                        </h1>
                        <p className="free-summary free-summary--styles">
                            The most important thing in your Publishing Journey is: Quality Advice, and we’re giving that for free. If you don’t know what to do, or don’t know how to do things, you can speak to our Consultants and Author Advisers for complimentary assistance and help.
                        </p>
                    </div>
                </section>
                <section className="registration-grid">
                    <div className="free-txt-container dp-free-txt-container">
                        <h1 className="free-title free-title--styles">
                            FREE
                            REGISTRATION
                        </h1>
                        <p className="free-summary free-summary--styles">
                            Free Registration. Get your Free Book Exhibit and Free Book Signing on upcoming International Events. This is open to the First 10 Authors.
                        </p>
                        <Link href="/">
                            <motion.button
                                className="free-btn free-btn--styles"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Request Now!
                        </motion.button>
                        </Link>
                    </div>
                    <div className="free-img-container">
                        <img src="/registration.png" alt="register image" className="registration-img" />
                    </div>
                    <div className="free-txt-container reg-free-txt-container">
                        <h1 className="free-title free-title--styles">
                            FREE
                            REGISTRATION
                        </h1>
                        <p className="free-summary free-summary--styles">
                            Free Registration. Get your Free Book Exhibit and Free Book Signing on upcoming International Events. This is open to the First 10 Authors.
                        </p>
                        <Link href="/services">
                            <motion.button
                                className="free-btn free-btn--styles"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Request Now!
                            </motion.button>
                        </Link>

                    </div>
                </section>
            </div>
        </div>
    )
}