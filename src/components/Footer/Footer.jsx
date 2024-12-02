import "./Footer.css";
import { Link } from "react-router-dom";
import GitHubIcon from "../../assets/github-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

export default function Footer() {
  return (
    <section className="footer-container">
      <div className="container-contact">
        <h3>Interesse em fazer projetos comigo?</h3>
        <Link to="/contact">
          <SecondaryButton styleBtn="btn-gray" textBtn="CONTATO" />
        </Link>
      </div>
      <footer>
        <nav>
          <div>
            <svg
              width="3.8rem"
              height="2rem"
              viewBox="0 0 61 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Combined Shape"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
                fill="rgb(234, 234, 235)"
              />
            </svg>
            <Link to="/" className="nav-option">
              Home
            </Link>
            <Link to="/portfolio" className="nav-option">
              Portfolio
            </Link>
            <Link to="/contact" className="nav-option">
              Contato
            </Link>
          </div>
          <div className="icons">
            <a href="https://github.com/Indalecioolivo" target="_blank">
              <img src={GitHubIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/indalecio-olivo-037819187/"
              target="_blank"
            >
              <img src={LinkedinIcon} alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </section>
  );
}
