import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      // If on homepage, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    } else {
      // If on another page, navigate to homepage then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page load
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          LM
        </Link>
        
        <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick('home', e)}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick('skills', e)}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              onClick={(e) => handleNavClick('portfolio', e)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick('contact', e)}
            >
              Contact
            </a>
          </li>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}