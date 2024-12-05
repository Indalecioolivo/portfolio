import "./Header.css";
import Triangles from "../../assets/combined-triangle.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      {/* <img src={Triangles} alt="" /> */}
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
      <nav>
        <Link to="/" className="nav-option">
          Home
        </Link>
        <Link to="/portfolio" className="nav-option">
          Portfolio
        </Link>
        <Link to="/contact" className="nav-option">
          Contato
        </Link>
      </nav>
    </header>
  );
}
