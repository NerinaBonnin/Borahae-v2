
import { useState, useEffect } from "react";
import { erasData } from "../data/erasData";

export function Eras() {
    const [selectedEra, setSelectedEra] = useState(null);

    // Cargar favoritos de eras desde localStorage
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('bts_eras_favorites');
        return saved ? JSON.parse(saved) : [];
    });

    // Guardar cambios en localStorage para que tu sección de Favoritos los pueda consumir
    useEffect(() => {
        localStorage.setItem('bts_eras_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (e, era) => {
        e.stopPropagation();
        setFavorites((prev) => {
        const exists = prev.some((item) => item.id === era.id);
        return exists
            ? prev.filter((item) => item.id !== era.id)
            : [...prev, era];
        });
    };

    return (
        <section id="eras">
        <div className="fade-in">
            <p className="section-tag">EL CAMINO RECORRIDO</p>
            <h2 className="section-title">Eras de BTS</h2>
        </div>

        <div className="eras-timeline fade-in">
            {erasData.map((era) => {
            const isFav = favorites.some((item) => item.id === era.id);

            return (
                <div key={era.id} className="era-item">
                <div className="era-dot"></div>

                <div className="era-content">
                    <span className="era-period">{era.period}</span>

                    {/* Fila con el título clickeable + botón de corazón */}
                    <div className="era-title-row">
                    <h3
                        className="era-title-clickable"
                        onClick={() => setSelectedEra(era)}
                        title="Hacé clic para ver fotos y discos de esta era"
                    >
                        {era.title}
                    </h3>

                    <button
                        className={`era-fav-btn ${isFav ? 'active' : ''}`}
                        onClick={(e) => toggleFavorite(e, era)}
                        title={isFav ? "Quitar era de favoritos" : "Guardar era en favoritos"}
                        aria-label="Favorito"
                    >
                        {isFav ? '♥' : '♡'}
                    </button>
                    </div>

                    <p className="era-description">{era.description}</p>
                </div>
                </div>
            );
            })}
        </div>

        {/* Modal con fotos y discos de la era seleccionada */}
        {selectedEra && (
            <div
            className="era-overlay"
            onClick={() => setSelectedEra(null)}
            >
            <div className="era-modal" onClick={(e) => e.stopPropagation()}>
            {/* Botón X bien visible arriba a la derecha */}
            <button
                className="era-modal-close"
                onClick={() => setSelectedEra(null)}
                aria-label="Cerrar"
                title="Cerrar"
                >
                ×
                </button>

                {/* Corazón al lado izquierdo de la X */}
                <button
                className={`era-fav-btn era-modal-fav ${
                    favorites.some((item) => item.id === selectedEra.id) ? 'active' : ''
                }`}
                onClick={(e) => toggleFavorite(e, selectedEra)}
                title="Favorito"
                >
                {favorites.some((item) => item.id === selectedEra.id) ? '♥' : '♡'}
                </button>

                <div className="era-modal-header">
                <span className="era-modal-period">{selectedEra.period}</span>
                <h3 className="era-modal-title">{selectedEra.title}</h3>
                <p className="era-modal-desc">{selectedEra.description}</p>
                </div>

                {/* Sección de Fotos de la Era */}
                {selectedEra.photos && selectedEra.photos.length > 0 && (
                <div className="era-modal-section">
                    <h4 className="era-modal-subtitle">Fotos de la era</h4>
                    <div className="era-photos-grid">
                    {selectedEra.photos.map((photo, i) => (
                        <img
                        key={i}
                        src={photo}
                        alt={`${selectedEra.title} foto ${i + 1}`}
                        loading="lazy"
                        />
                    ))}
                    </div>
                </div>
                )}

                {/* Sección de Discos de la Era */}
                {selectedEra.albums && selectedEra.albums.length > 0 && (
                <div className="era-modal-section">
                    <h4 className="era-modal-subtitle">Discografía de la era</h4>
                    <div className="era-albums-grid">
                    {selectedEra.albums.map((album, i) => (
                        <div key={i} className="era-album-card">
                        <img src={album.cover} alt={album.title} loading="lazy" />
                        <div className="era-album-info">
                            <span className="era-album-name">{album.title}</span>
                            <span className="era-album-year">{album.year}</span>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
            </div>
        )}
        </section>
    );
}