import React, { useState } from "react"; // Importa React y el hook useState

function Header({ toggleReserve }) {
  // Define un estado llamado "menuVisible" para controlar si el menú es visible o no
  const [menuVisible, setMenuVisible] = useState(false);

  // Función que alterna el estado "menuVisible" entre true y false
  const estadoMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav id="home" aria-label="Main navigation"> {/* Añadido ARIA para describir el propósito de la barra de navegación */}
      <div className="navBar contenedorPrincipal">
        <div className="logo">
          <a href="#home" aria-label="Go to homepage">
            <img className="logoImg" src="/Icons_assets/Logo.svg" alt="Little Lemon logo" />
          </a>
        </div>

        {/* Botón para mostrar/ocultar el menú en pantallas pequeñas */}
        <button
          className="botonMenu"
          onClick={(e) => {
            e.preventDefault(); // Evita que el enlace se comporte como un link y haga scroll
            estadoMenu(); // Alterna la visibilidad del menú al hacer clic
          }}
          aria-controls="enlacesMenu" // Indica qué elemento controla este botón
          aria-expanded={menuVisible ? "true" : "false"} // Informa si el menú está abierto o cerrado
        >
          <img src="/Icons_assets/menu.svg" alt="Menu Boton" />
        </button>

        {/* Lista de enlaces del menú. La clase cambia entre "visible" y "hidden" según el estado menuVisible */}
        <ul 
          id="enlacesMenu" 
          className={`enlacesMenu ${menuVisible ? "visible" : "oculto"}`} 
          role="menu" // Indica que esta lista es un menú
        >
          <li><a href="#home" role="menuitem" aria-label="Go to home page">Home</a></li>
          <li><a href="#about" role="menuitem" aria-label="Learn more about us">About</a></li>
          <li><a href="#menu" role="menuitem" aria-label="View our menu">Menu</a></li>
          <li>
            <a 
              className="reserveDisplay"
              href="#reservations"
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                if (menuVisible) {
                  setMenuVisible(false); // Cierra el menú si está visible
                }
                toggleReserve(); // Llama a la función para mostrar las reservas
              }}
              aria-label="Make a reservation"
            >
              Reservations
            </a>
          </li>
          <li><a href="#orderonline" role="menuitem" aria-label="Order food online">Order Online</a></li>
          <li><a href="#login" role="menuitem" aria-label="Login to your account">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

