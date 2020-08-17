import dynamic from "next/dynamic";

import "../../styles/homeStyles/home-services.scss";

const HomeServiceCard = dynamic(() =>
    import("../homeComponents/HomeServiceCard")
);

export default function HomeServices(props) {
    return (
        <div className="home-services-container">
            <h2 className="home-service-title home-service-title--styles">
                Our Services
            </h2>
            <div className="service-cards-center">
                <div className="service-cards-grid">
                    <HomeServiceCard />
                    <HomeServiceCard />
                    <HomeServiceCard />
                </div>
            </div>
        </div>
    );
}
