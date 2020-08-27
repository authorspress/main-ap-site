import "../styles/desktop-navbar.scss";
import Link from "next/Link";

export default function DesktopNavbar(props) {
    return (
        <div className="desktop-navbar-container">
            <section className="desktop-navbar desktop-navbar--styles">
                <div className="dp-logo-container">
                    <Link href="/">
                        <a href="">
                            <img src="/ap-logo.png" alt="authors press logo" className="dp-logo" />
                        </a>
                    </Link>
                </div>
                <nav className="dp-nav-links">
                    <Link href="/">
                        <a href="" className="dp-nav-link dp-nav-link--styles">Home</a>
                    </Link>

                    <Link href="/services">
                        <a href="" className="dp-nav-link dp-nav-link--styles">Services</a>
                    </Link>

                    <Link href="/bookstore">
                        <a href="" className="dp-nav-link dp-nav-link--styles">Bookstore</a>
                    </Link>

                    <Link href="/blog">
                        <a href="" className="dp-nav-link dp-nav-link--styles">Blog</a>
                    </Link>

                    <Link href="/about-us">
                        <a href="" className="dp-nav-link dp-nav-link--styles">About Us</a>
                    </Link>
                </nav>
            </section>
        </div>
    )
}