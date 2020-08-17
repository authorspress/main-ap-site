import "../../styles/homeStyles/home-service-card.scss";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";

export default function HomeServiceCard(props) {
    return (
        <div className="home-service-card-container">
            <div className="home-service-card-title-container">
                <FontAwesomeIcon className="home-service-icon--styles" icon={faSwatchbook} style={{ width: "48px" }} />
                <h3 className="home-service-card-title home-service-card-title--styles">
                    Publishing Packages
                </h3>
            </div>
            <p className="summary summary--styles">
                    Our publishing packages include  specially designed packages that tailor fit your publishing needs.
            </p>
            <motion.button
            className="home-service-btn home-service-btn--styles"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Create Your Book
            </motion.button>
            
        </div>
    );
}
