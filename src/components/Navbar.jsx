import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './components.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className={isOpen ? '' : 'open'}>
          <li className="list-item active">
            <a href="#home">Home</a>
          </li>
          <li className="list-item">
            <a href="#about">About</a>
          </li>
          <li className="list-item">
            <a href="#projects">Projects</a>
            <span></span>
          </li>
          <li className="list-item">
            <a href="contact">
              <span></span>Contact<span></span>
            </a>
          </li>
          <li className="list-item btn">
            <button>Resume</button>
          </li>
        </ul>
        <span className="nav-icon">
          <AiOutlineMenu onClick={toggle} />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
