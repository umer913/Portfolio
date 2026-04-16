import { useState } from "react";

const links = [
  { href: "#development", label: "Development" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="top-nav-wrap">
      <nav className="top-nav">
        <a className="brand" href="#home" onClick={handleClose}>
          Umer Farooq
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleClose}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a className="btn btn-primary nav-cta" href="#contact" onClick={handleClose}>
              Hire Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
