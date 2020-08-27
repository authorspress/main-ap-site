import "../styles/service-card.scss";
import { motion } from "framer-motion";
import Link from "next/Link";

export default function ServiceListCard(props) {
    let hasQuote = <p className="quote quote--styles">
        {props.serviceQuote}
    </p>
    let hasNoQuote = <p className="no-quote"></p>
    let quote = props.serviceQuote ? hasQuote : hasNoQuote;

    return (
        <div className="home-service-card-container">
            <div className="home-service-card-title-container">
                <div className="icon-container">
                    {props.serviceIcon}
                </div>
                <h3 className="home-service-card-title home-service-card-title--styles">
                    {props.serviceTitle}
                </h3>
            </div>
            {quote}
            <p className="summary summary--styles">
                {props.serviceSummary}
            </p>
            <Link href={props.serviceLink}>
                <motion.button
                    className={`${props.btnClass} home-service-btn home-service-btn--styles`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {props.btnTitle}
                </motion.button>
            </Link>
        </div>
    );
}
