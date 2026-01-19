import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="/alohomorareact/medios/alohomora.png"
          alt="logo"
          style={{ height: "40px", marginRight: "12px" }}
        />
      </Link>

      <Link to="/">Inicio</Link>
      <Link to="/category/varitas">Varitas</Link>
      <Link to="/category/pociones">Pociones</Link>
      <Link to="/category/libros">Libros</Link>

      <div style={{ marginLeft: "auto" }}>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;