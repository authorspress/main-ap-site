import "../styles/desktop-navbar.scss";

export default function DesktopNavbar(props) {
    return (
        <div className="desktop-navbar-container">
            <section className="desktop-navbar desktop-navbar--styles">
                <div className="dp-logo-container">
                    <img src="/ap-logo.png" alt="authors press logo" className="dp-logo" />
                </div>
                <nav className="dp-nav-links">
                    <a href="" className="dp-nav-link dp-nav-link--styles">Home</a>
                    <a href="" className="dp-nav-link dp-nav-link--styles">Services</a>
                    <a href="" className="dp-nav-link dp-nav-link--styles">Bookstore</a>
                    <a href="" className="dp-nav-link dp-nav-link--styles">Blog</a>
                    <a href="" className="dp-nav-link dp-nav-link--styles">About Us</a>
                </nav>
            </section>
        </div>
    )
}