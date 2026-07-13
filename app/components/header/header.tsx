import { useState } from "react";
import "./header.css"

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <header id="home">
      <div>
        <nav>
          <a href="#home"><img src="/Icon.png" alt="Icon" /></a>
          <div className="pcMenu">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <button
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              >
                <div>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </button>
          </div>

          <div className={`menu ${isOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#about" onClick={() => setIsOpen(!isOpen)}>About</a></li>
              <li><a href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</a></li>
              <li><a href="#works" onClick={() => setIsOpen(!isOpen)}>Works</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(!isOpen)}>Contact</a></li>
            </ul>
          </div>

        </nav>
      </div>
    </header>
  );
}