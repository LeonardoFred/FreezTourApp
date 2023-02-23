import Logo from './Logo'; 
import { NavLink } from 'react-router-dom'

import './styles/navbar.css'


export default function Navbar() {
  const items = ["About", "Services", "Contact"];

  return (
    <header className="navbar">
      <Logo />

      {/** Abbiamo <Link> e <NavLink> (usiamo il secondo perché customizzabile) 
       *  il to="" corrisponde al mio link in href 
       * In pagina avrò <a class="navbar__item" href="/about">About</a>
      */}
      <NavLink className="navbar__item" to="/about">
        About
      </NavLink>

      <NavLink className="navbar__item" to="/services">
        Services
      </NavLink>
      
      <NavLink className="navbar__item" to="/contact">
        Contact
      </NavLink>
    </header>
  );
}
