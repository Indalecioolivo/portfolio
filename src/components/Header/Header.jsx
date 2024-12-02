import "./Header.css";
import Triangles from "../../assets/combined-triangle.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <img src={Triangles} alt="" />
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
