import './navbar.css';
import {useState, useEffect} from 'react';
import logo from '../../assets/logo-alpha.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  var [toggleState, updateToggleState] = useState(false);
  var [navbarCSSToggle, updateNavbarCSSToggle] = useState("navbar-links navbar-links-hidden");

  useEffect(() => {
    if(toggleState) {
      updateNavbarCSSToggle("navbar-links navbar-links-shown");
    }
    else {
      updateNavbarCSSToggle("navbar-links navbar-links-hidden");
    }
  },[toggleState]);

  const toggleMenu = () => {
    !toggleState ? updateToggleState(true) : updateToggleState(false);
  }

  const turnOffToggleMenu = () => {
    updateToggleState(false)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/AtlusClone"><img src={logo} alt="logo" className="logo" /></Link>
            <div className="navbar-menu" onClick={toggleMenu}>Menu</div>
          </li>
          <li className={navbarCSSToggle}>
            <Link to="/AtlusClone" onClick={turnOffToggleMenu}>Home</Link>
          </li>
          <li className={navbarCSSToggle}>
            <Link to="/games" onClick={turnOffToggleMenu}>Games</Link>
          </li>
          <li className={navbarCSSToggle}>
            <Link to="/news" onClick={turnOffToggleMenu}>News</Link>
          </li>
          <li className={navbarCSSToggle}>
            <Link to="/company" onClick={turnOffToggleMenu}>Company</Link>
          </li>
          <li className={navbarCSSToggle}>
            <Link to="/careers" onClick={turnOffToggleMenu}>Careers</Link>
          </li>
          <li className={navbarCSSToggle}>
            <Link to="/contact" onClick={turnOffToggleMenu}>Contact</Link>
          </li>
          <li className={navbarCSSToggle}>
            <Link to="/shop" onClick={turnOffToggleMenu}>Shop</Link>
          </li>
          <li className={navbarCSSToggle}></li>
          <li>
            Socials
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
