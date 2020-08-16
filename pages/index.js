import Head from "next/head";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"));
const Landing = dynamic(() => import("../components/homeComponents/Landing"));

export default function Home() {
    return (
        <div>
            <Layout>
                <Landing />
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
