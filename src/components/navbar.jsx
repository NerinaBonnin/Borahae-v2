
export function Navbar(){
    return(
        <nav>
            <a className="nav-logo" href="#">BTS</a>
            <ul className="nav-links">
                <li><a href="#members">Integrantes</a></li>
                <li><a href="#discography">Discografía</a></li>
                <li><a href="#performances">Actuaciones</a></li>
                <li><a href="#awards">Premios</a></li>
                <li><a href="#army">ARMY</a></li>
                <li><a href="#calendar">Calendario</a></li>
                <li><a href="#lyrics">Letras</a></li>
                <li><a href="#universe">Universo</a></li>
            </ul>
            <div className="nav-actions">
                <button className="nav-btn" id="search-btn">🔍 Buscar</button>
                <button className="nav-btn" id="theme-btn">🌙 Modo</button>
            </div>
            <div className="hamburger" id="hamburger">
                <span></span><span></span><span></span>
            </div>
        </nav>
    );
}