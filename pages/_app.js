import "../styles/reset.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMapMarkerAlt,
    faPhone,
    faAt,
    faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitterSquare,
    faInstagram,
    faYoutubeSquare,
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcDiscover,
    faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faMapMarkerAlt,
    faPhone,
    faAt,
    faFacebookSquare,
    faTwitterSquare,
    faInstagram,
    faYoutubeSquare,
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcDiscover,
);
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
