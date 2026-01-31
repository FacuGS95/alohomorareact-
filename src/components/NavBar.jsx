import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <img
          src={import.meta.env.BASE_URL + "medios/alohomora.png"}
          alt="logo"
        />
      </Link>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/category/varitas">Varitas</Link>
        <Link to="/category/pociones">Pociones</Link>
        <Link to="/category/libros">Libros</Link>
      </div>

      <Link to="/cart" className="nav-cart">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;