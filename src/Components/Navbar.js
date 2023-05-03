import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-neutral-600 ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
