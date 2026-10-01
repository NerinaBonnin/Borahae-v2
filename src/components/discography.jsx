import * as discographyData from "../data/discography.js";

export function Discography() {
  // Convertimos las portadas/datos en un array para poder iterar sobre ellos
    const groupCovers = Object.entries(discographyData.albumCoverImages || {});
    const soloCovers = Object.entries(discographyData.soloAlbumCovers || {});

    return (
    <section id="discography">
        <div className="fade-in">
            <p className="section-tag">La música</p>
            <h2 className="section-title">Discografía</h2>
        </div>

        <div className="album-tabs fade-in">
            <button className="album-tab active">Álbumes Grupales</button>
            <button className="album-tab">Álbumes Solistas</button>
        </div>

        {/* Contenedor de Álbumes Grupales */}
        <div className="disc-panel active" id="panel-group">
            <div className="albums-grid fade-in" id="group-grid">
                {groupCovers.map(([key, src]) => (
                    <div key={key} className="album-card">
                        <img src={src} alt={key} className="album-cover" />
                        <p className="album-name">{key}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Contenedor de Álbumes Solistas */}
        <div className="disc-panel" id="panel-solo">
            <div className="solo-grid fade-in" id="solo-grid">
                {soloCovers.map(([key, src]) => (
                    <div key={key} className="album-card">
                        <img src={src} alt={key} className="album-cover" />
                        <p className="album-name">{key}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}