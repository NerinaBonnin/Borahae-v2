export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="site-footer">
        <div className="footer-top">
            {/* 1. Marca y descripción */}
            <div className="footer-brand">
            <div className="logo">BTS</div>
            <p className="footer-tagline">
                Archivo editorial e interactivo dedicado a la música, las eras y el universo de Bangtan Sonyeondan.
            </p>
            </div>

            {/* 2. Navegación rápida */}
            <div className="footer-col">
            <span className="footer-heading">Explorar</span>
            <ul className="footer-links">
                <li><a href="#members">Integrantes</a></li>
                <li><a href="#discography">Discografía</a></li>
                <li><a href="#performances">Presentaciones</a></li>
                <li><a href="#experience">Sonora</a></li>
                <li><a href="#army">Army</a></li>
                <li><a href="#lyrics">Letras</a></li>
                <li><a href="#quotes">Fraces</a></li>
                <li><a href="#eras">Eras</a></li>
                <li><a href="#journey">Mis Favoritos</a></li>
            </ul>
            </div>

            {/* 3. Enlaces externos / Oficiales */}
            <div className="footer-col">
            <span className="footer-heading">Oficial</span>
            <ul className="footer-links">
                <li><a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX" target="_blank" rel="noreferrer">Spotify</a></li>
                <li><a href="https://www.youtube.com/@BTS" target="_blank" rel="noreferrer">YouTube</a></li>
                <li><a href="https://weverse.io/bts" target="_blank" rel="noreferrer">Weverse</a></li>
            </ul>
            </div>

            {/* 4. Botón volver arriba */}
            <div className="footer-action">
            <button
                type="button"
                onClick={scrollToTop}
                className="footer-top-btn"
                aria-label="Volver arriba"
            >
                ↑ Arriba
            </button>
            </div>
        </div>

        {/* Barra inferior legal y de cierre */}
        <div className="footer-bottom">
            <p>Sitio de fans — sin afiliación con HYBE / Big Hit Entertainment</p>
            <p>Hecho con amor · Purple you · 2026</p>
        </div>
        </footer>
    );
}