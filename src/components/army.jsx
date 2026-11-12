import { useState } from "react";
import { armyAcronymData, armyStatsData, armyImpactData } from "../data/armyData";

export function Army() {
    // Estado para saber qué letra del acrónimo está seleccionada (por defecto la primera "adorable")
    const [activeAcronym, setActiveAcronym] = useState(armyAcronymData[0].id);

    return (
        <section id="army" className="army-section">
            <div className="fade-in">
                <p className="section-tag">La familia</p>
                <h2 className="section-title">El Fandom ARMY</h2>
                <p className="army-intro">
                    ARMY (Adorable Representative M.C for Youth) no es solo una base de fans — es un movimiento global de millones que comparten música, valores y amor incondicional.
                </p>
            </div>

            {/* Acrónimo interactivo conectado por estado */}
            <div className="army-acronym-block fade-in">
                <div className="army-acronym-left">
                    <div className="army-letter-stack">
                        {armyAcronymData.map((item) => (
                            <div 
                                key={item.id}
                                className={`army-letter ${activeAcronym === item.id ? "active" : ""}`}
                                onClick={() => setActiveAcronym(item.id)}
                            >
                                {item.letter}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="army-acronym-right">
                    {armyAcronymData.map((item) => (
                        <div 
                            key={item.id}
                            className={`army-acronym-panel ${activeAcronym === item.id ? "active" : ""}`}
                        >
                            <span className="ai-label">{item.label}</span>
                            <p className="ai-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Estadísticas mapeadas dinámicamente */}
            <div className="army-stats-row fade-in">
                {armyStatsData.map((stat, index) => (
                    <div className="army-stat-item" key={index}>
                        <div className="army-stat-num">
                            {stat.prefix}{stat.target}{stat.suffix}
                        </div>
                        <div className="army-stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Momentos de impacto mapeados dinámicamente */}
            <div className="army-impact-section fade-in">
                <div className="army-impact-header">
                    <span className="section-tag" style={{ marginBottom: 0 }}>Momentos que marcaron historia</span>
                    <div className="army-scroll-hint">← deslizá →</div>
                </div>
                <div className="army-impact-track">
                    {armyImpactData.map((impact, index) => (
                        <div className="army-impact-card" key={index}>
                            <div className="aic-year">{impact.year}</div>
                            <div className="aic-title">{impact.title}</div>
                            <p className="aic-text">{impact.text}</p>
                            <div className={`aic-tag ${impact.special ? "aic-tag-purple" : ""}`}>
                                {impact.tag}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}