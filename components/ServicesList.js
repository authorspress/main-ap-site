import dynamic from "next/dynamic";

import "../styles/homeStyles/home-services.scss";
import { faSwatchbook, faEdit, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ServiceListCard = dynamic(() =>
    import("./ServiceListCard")
);

export default function ServicesList(props) {
    let icon1 = (<FontAwesomeIcon
        className="home-service-icon--styles"
        icon={faSwatchbook}
        style={{ width: "24px" }}
    />)

    let icon2 = (<FontAwesomeIcon
        className="home-service-icon--styles"
        icon={faEdit}
        style={{ width: "24px" }}
    />)

    let icon3 = (<FontAwesomeIcon
        className="home-service-icon--styles"
        icon={faCubes}
        style={{ width: "24px" }}
    />)

    return (
        <div className="home-services-container">
            <h2 className="home-service-title home-service-title--styles">
                Our Services
            </h2>
            <div className="service-cards-center">
                <div className="service-cards-grid">
                    <ServiceListCard
                        serviceIcon={icon1}
                        serviceTitle="PUBLISHING PACKAGES"
                        serviceSummary="Our publishing packages include specially designed packages that tailor fit your publishing needs."
                        btnTitle="create your book" />
                    <ServiceListCard serviceIcon={icon2}
                        serviceTitle="EDITORIAL AND ADD-ONS"
                        serviceQuote="“To write is human, to edit is divine.”
                  - Stephen King"
                        serviceSummary="Editing transforms a manuscript from ordinary to extraordinary. No matter how skilled of a writer we are."
                        btnTitle="pick your editing needs" />
                    <ServiceListCard serviceIcon={icon3}
                        serviceTitle="MARKETING PACKAGES"
                        serviceSummary="Publishing a book is one thing; delivering it to the right audiences is another. Authors Press provides various marketing strategies that ensures progressive and remarkable."
                        btnTitle="pick your audience"  />
                </div>
            </div>
        </div>
    );
}
