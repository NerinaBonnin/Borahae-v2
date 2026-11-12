import { useState, useEffect } from "react";

export function Navbar() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("bts-theme") || "light";
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("bts-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };
    
    return (
        <>
            <nav className="navbar" style={{ position: 'relative' }}>
                <a className="nav-logo" href="#">BTS</a>

                {/* Enlaces de navegación (se ocultan en móvil y se despliegan con el menú) */}
                <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                    <li><a href="#members" onClick={() => setIsMenuOpen(false)}>Integrantes</a></li>
                    <li><a href="#discography" onClick={() => setIsMenuOpen(false)}>Discografía</a></li>
                    <li><a href="#performances" onClick={() => setIsMenuOpen(false)}>Presentaciones</a></li>
                    <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Sonoras</a></li>
                    <li><a href="#army" onClick={() => setIsMenuOpen(false)}>ARMY</a></li>
                    <li><a href="#calendar" onClick={() => setIsMenuOpen(false)}>Calendario</a></li>
                    <li><a href="#lyrics" onClick={() => setIsMenuOpen(false)}>Letras</a></li>
                    <li><a href="#universe" onClick={() => setIsMenuOpen(false)}>Universo</a></li>
                </ul>

                <div className="nav-actions">
                    <button 
                        id="theme-btn" 
                        className="nav-btn" 
                        onClick={toggleTheme}
                    >
                        {theme === "dark" ? " Modo Claro" : " Modo Oscuro"}
                    </button>

                    {/* Único botón hamburguesa */}
                    <div 
                        className="hamburger" 
                        id="hamburger"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    );
}