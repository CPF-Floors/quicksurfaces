import { Link } from "react-router-dom";
import "../scss/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="contact-text">
        <h2>Get in Touch</h2>
        <p>Our postal adderss and contact details</p>
      </div>
      <div className="contact-social">
            <div className="contact">
            <i className="fa-brands fa-instagram"></i>
            <div className="text">
                <h4>Instagram</h4>
                <p>@quicksurfaces</p>
            </div>
            </div>
            <div className="contact">
            <i className="fa-solid fa-location-dot"></i>
            <div className="text">
                <h4>Address</h4>
                <p>13405 SW 128 ST UNIT 208B Miami, FL, 33186</p>
            </div>
            </div>
      </div>
      <div className="footer-links">
        <img className="footer-img" src="./Group146.svg" alt="" />
        <nav className="nav-footer">
            <Link>Specifications</Link>
            <Link>Collections</Link>
            <Link>Roomvo</Link>
            <Link>Contact Us</Link>
        </nav>
      </div>
      <div className="copywright">
        <p>All Right Reserves 2024 Quicksurfaces</p>
      </div>
    </footer>
  );
}

export default Footer;
