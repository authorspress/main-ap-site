import Head from "next/head";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));
const Landing = dynamic(() => import("../components/homeComponents/Landing"));
const ServicesList = dynamic(() => import("../components/ServicesList"));
const FreeSection = dynamic(() => import("../components/homeComponents/FreeSection"));
const Footer = dynamic(() => import("../components/Footer"));


export default function Home() {
    return (
        <div>
            <Layout title="Home | Authors Press">
                <Landing />
                <h2 className="home-service-title home-service-title--styles">
                    Our Services
                </h2>
                <ServicesList />
                <FreeSection />
                <Footer />
            </Layout>
        </div>
    );
}

/*
Illustration by <a href="undefined">Icons 8</a> from <a href="https://icons8.com/">Icons8</a>
            Illustration by <a href="undefined">Icons 8</a> from <a href="https://icons8.com/">Icons8</a>
            <a href="https://www.freepik.com/vectors/business">
                Business vector created by pikisuperstar - www.freepik.com
            </a>
*/
