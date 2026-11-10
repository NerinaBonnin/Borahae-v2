import { useState } from "react";
import * as discographyData from "../data/discography.js";

export function Discography() {
    // Estado para saber qué pestaña está activa ('group' o 'solo')
    const [activeTab, setActiveTab] = useState("group");

    // Estado para guardar la clave del álbum seleccionado
    const [selectedAlbumKey, setSelectedAlbumKey] = useState(null);

    // Datos y portadas para cada categoría
    const groupCovers = Object.entries(discographyData.albumCoverImages || {});
    const groupAlbumsData = discographyData.groupAlbums || {};

    const soloCovers = Object.entries(discographyData.soloAlbumCovers || {});
    const soloAlbumsData = discographyData.soloAlbumsData || {};

    // Determinar qué datos usar según la pestaña activa
    const currentCovers = activeTab === "group" ? groupCovers : soloCovers;
    const currentAlbumsData = activeTab === "group" ? groupAlbumsData : soloAlbumsData;
    const currentCoverImages = activeTab === "group" ? discographyData.albumCoverImages : discographyData.soloAlbumCovers;

    // Datos del álbum actual para el modal
    const currentAlbum = selectedAlbumKey ? currentAlbumsData[selectedAlbumKey] : null;
    const currentCover = selectedAlbumKey ? currentCoverImages[selectedAlbumKey] : null;

    return (
        <section id="discography">
            <div className="fade-in">
                <p className="section-tag">La música</p>
                <h2 className="section-title">Discografía</h2>
            </div>

            {/* Pestañas de navegación */}
            <div className="album-tabs fade-in">
                <button 
                    className={`album-tab ${activeTab === "group" ? "active" : ""}`}
                    onClick={() => setActiveTab("group")}
                >
                    Álbumes Grupales
                </button>
                <button 
                    className={`album-tab ${activeTab === "solo" ? "active" : ""}`}
                    onClick={() => setActiveTab("solo")}
                >
                    Álbumes Solistas
                </button>
            </div>

            {/* Grilla dinámica según la pestaña activa */}
            <div className="disc-panel active" id="panel-group">
                <div className="albums-grid fade-in" id="group-grid">
                    {currentCovers.map(([key, src]) => {
                        const albumInfo = currentAlbumsData[key] || {};
                        return (
                            <div 
                                key={key} 
                                className="album-card" 
                                onClick={() => setSelectedAlbumKey(key)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={src} alt={key} className="album-cover" />
                                <div className="album-card-info" style={{ textAlign: 'left', width: '100%', marginTop: '8px' }}>
                                    <span className="album-year-tag">{albumInfo.meta?.Lanzamiento || albumInfo.meta?.['Lanzamiento'] || ''}</span>
                                    <p className="album-name">{albumInfo.title || key}</p>
                                    <span className="album-type-tag">{albumInfo.type || ''}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* --- VENTANA EMERGENTE (MODAL) --- */}
            {selectedAlbumKey && currentAlbum && (
                <div className="album-modal-overlay open" onClick={() => setSelectedAlbumKey(null)}>
                    <div className="album-modal-content" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Botón de cerrar */}
                        <button className="close-modal-btn" onClick={() => setSelectedAlbumKey(null)}>×</button>

                        {/* Cabecera: Imagen y Metadatos */}
                        <div className="modal-header-container">
                            <img src={currentCover} alt={currentAlbum.title} className="modal-album-img" />
                            <div className="modal-info-header">
                                <span className="modal-album-type">{currentAlbum.type}</span>
                                <h2 className="album-modal-title">{currentAlbum.title}</h2>
                                
                                <div className="modal-meta-grid">
                                    {currentAlbum.meta && Object.entries(currentAlbum.meta).map(([label, value]) => (
                                        <div key={label} className="meta-column">
                                            <span className="meta-label">{label.toUpperCase()}</span>
                                            <span className="meta-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <hr className="modal-divider" />

                        {/* Historia del álbum */}
                        <div className="modal-story-section">
                            <h3>LA HISTORIA</h3>
                            <p>{currentAlbum.story}</p>
                        </div>

                        <hr className="modal-divider" />

                        {/* Lista de Canciones */}
                        <div className="modal-tracks-section">
                            <h3>LISTA DE CANCIONES</h3>
                            <ul className="tracklist">
                                {currentAlbum.tracks && currentAlbum.tracks.map((track) => (
                                    <a 
                                        key={track.n} 
                                        href={track.sp || `https://open.spotify.com/search/BTS ${track.name}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="track-item"
                                        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
                                    >
                                        <span className="track-num">{track.n}.</span>
                                        <span className="track-name">{track.name}</span>
                                        <span className="track-duration">{track.dur}</span>
                                    </a>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}