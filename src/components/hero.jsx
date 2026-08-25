export function Hero(){
    return(
        <section className="hero">
            <div className="hero-text fade-in">
                <span className="hero-tag">Bangtan Sonyeondan · 방탄소년단</span>
                <h1 className="hero-title">Más allá de la <span>Escena</span></h1>
                <p className="hero-desc">Siete voces. Un universo. Desde 2013, BTS redefinió lo que significa ser artistas — hablándole a una generación a través de la música, la autenticidad y el amor.</p>
                <div className="hero-btns">
                    <a href="#members" className="btn">Conocé a los integrantes</a>
                    <a href="#journey" className="btn btn-accent">Mi Viaje con BTS</a>
                </div>
            </div>
            <div className="hero-visual fade-in">
                <div className="hero-circle">
                    <div className="hero-circle-badge">
                        <span className="num">7</span>
                        <span className="label">Integrantes</span>
                    </div>
                </div>
            </div>
        </section>
    );
}