import dynamic from "next/dynamic";

import "../styles/services.scss";
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
            <div className="service-cards-center">
                <div className="service-cards-grid">
                    <ServiceListCard
                        serviceLink="/publishing-packages"
                        serviceIcon={icon1}
                        serviceTitle="PUBLISHING PACKAGES"
                        serviceSummary="Our publishing packages include specially designed packages that tailor fit your publishing needs."
                        btnClass="btn1-margin"
                        btnTitle="create your book" />
                    <ServiceListCard 
                        serviceLink="/editoroal-and-add-on"
                        serviceIcon={icon2}
                        serviceTitle="EDITORIAL AND ADD-ONS"
                        serviceQuote="“To write is human, to edit is divine.”
                  - Stephen King"
                        serviceSummary="Editing transforms a manuscript from ordinary to extraordinary. No matter how skilled of a writer we are."
                        btnClass=""
                        btnTitle="pick your editing needs" />
                    <ServiceListCard 
                        serviceLink="/marketing-packages"
                        serviceIcon={icon3}
                        serviceTitle="MARKETING PACKAGES"
                        serviceSummary="Publishing a book is one thing; delivering it to the right audiences is another. Authors Press provides various marketing strategies that ensures progressive and remarkable."
                        btnClass="btn3-margin"
                        btnTitle="pick your audience"  />
                </div>
            </div>
        </div>
    );
}
