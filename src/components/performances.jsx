import { performancesData } from "../data/performancesData";

export function Performance() {
    return (
        <section id="performances">
            <div className="fade-in">
                <p className="section-tag">Momentos épicos</p>
                <h2 className="section-title">Presentaciones Icónicas</h2>
            </div>
            
            <div className="performances-grid fade-in">
                {performancesData.map((perf) => (
                    <div className="perf-card" key={perf.id}>
                        <div className="perf-video-wrap">
                            <iframe 
                                src={`https://www.youtube.com/embed/${perf.id}`} 
                                title={`${perf.title} en ${perf.year}`} 
                                allowFullScreen 
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="perf-info">
                            <div className="perf-year-tag">{perf.year}</div>
                            <div className="perf-title">{perf.title}</div>
                            <p className="perf-desc">{perf.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}