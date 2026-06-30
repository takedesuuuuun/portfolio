import { useState } from "react";
import "./header.css"

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <header>
      <div>
        <nav>
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            >
            {!isOpen && (
              <div className="closeHamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {isOpen && (
              <div className="openHamburger">
                <div className="leftCross"></div>
                <div className="rightCross"></div>
              </div>
            )}
          </button>
          {isOpen && (
            <div className="menu">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}