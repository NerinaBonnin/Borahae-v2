import { useState } from "react";
import { sounds } from "../data/sonoraData";

export function ExperienciaSonora() {
    // Estado para guardar la experiencia actual (por defecto la primera "live")
    const [currentSound, setCurrentSound] = useState(sounds.live);

    return (
        <section id="experience">
            <div className="fade-in">
                <p className="section-tag">Más allá de la música</p>
                <h2 className="section-title">Experiencia Sonora</h2>
            </div>
            
            <div className="sound-grid">
                <button onClick={() => setCurrentSound(sounds.live)}>Concierto en vivo</button>
                <button onClick={() => setCurrentSound(sounds.onu)}>Discurso ONU</button>
                <button onClick={() => setCurrentSound(sounds.army)}>ARMY</button>
                <button onClick={() => setCurrentSound(sounds.award)}>Premio</button>
                <button onClick={() => setCurrentSound(sounds.Vocal)}>Vocal line</button>
                <button onClick={() => setCurrentSound(sounds.Rap)}>Rap line</button>
                <button onClick={() => setCurrentSound(sounds.backstage)}>Backstage</button>
            </div>

            <div className="sound-player">
                <p id="sound-text">{currentSound.text}</p>
                <iframe 
                    id="sound-video"
                    src={currentSound.video} 
                    width="100%" 
                    height="315" 
                    frameBorder="0" 
                    allowFullScreen
                    title="Experiencia Sonora BTS"
                ></iframe>
            </div>
        </section>
    );
}