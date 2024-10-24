import React from "react"; // Importa React (necesario para componentes en versiones anteriores de React)
import { useState } from "react"; // Importa el hook useState para manejar el estado dentro del componente
import Logo from "../Icons_assets/Logo.svg"; // Importa la imagen del logo
import Menusvg from "../Icons_assets/menu.svg"; // Importa la imagen del icono de menú (botón)

function Header() {
  // Define un estado llamado "menuVisible" para controlar si el menú es visible o no
  const [menuVisible, setMenuVisible] = useState(false);

  // Función que alterna el estado "menuVisible" entre true y false
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#home">
            <img className="logoImg" src={Logo} alt="Little Lemon logo"></img>
          </a>
        </div>

        {/* Botón para mostrar/ocultar el menú en pantallas pequeñas */}
        <a className="botonMenu"
          href="#enlacesMenu"
          onClick={(e) => {
            e.preventDefault(); // Evita que el enlace se comporte como un link y haga scroll
            toggleMenu(); // Alterna la visibilidad del menú al hacer clic
          }}
        >
          <img src={Menusvg} alt="Menu Boton"></img>
        </a>
        {/* Lista de enlaces del menú. La clase cambia entre "visible" y "hidden" según el estado menuVisible */}
        <ul className={`enlacesMenu ${menuVisible ? "visible" : "hidden"}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#orderonline">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header; // Exporta el componente Header para usarlo en otras partes de la aplicación
