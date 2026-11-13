import { useState, useEffect } from "react";
import { lyricsData } from "../data/lyricsData";

export function Lyrics() {
    const [selectedLyric, setSelectedLyric] = useState(null);
    
    // Estado para guardar los favoritos en localStorage
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('bts_lyrics_favorites');
        return saved ? JSON.parse(saved) : [];
    });

    // Sincronizar cambios con localStorage para que tu futura sección de Favoritos los pueda leer
    useEffect(() => {
        localStorage.setItem('bts_lyrics_favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Alternar el estado de favorito al hacer clic en el corazón
    const toggleFavorite = (e, lyric) => {
        e.stopPropagation(); // Evita que se abra el modal al tocar el corazón
        setFavorites(prev => {
            const exists = prev.some(item => item.id === lyric.id);
            if (exists) {
                return prev.filter(item => item.id !== lyric.id);
            } else {
                return [...prev, lyric]; // Guardamos el objeto completo para mostrarlo luego en la sección Favoritos
            }
        });
    };

    const custom = JSON.parse(localStorage.getItem('bts_crud_lyrics') || '[]');
    const allLyrics = [...lyricsData, ...custom];

    return (
        <section id="lyrics">
            <div className="fade-in">
                <p className="section-tag">Sus palabras</p>
                <h2 className="section-title">Letras que dejan huella</h2>
                <p className="lyrics-section-sub">
                    Frases de sus canciones que tocan el alma. Hacé clic en cualquiera para verla en detalle.
                </p>
            </div>

            <div className="lyrics-grid fade-in">
                {allLyrics.map((l, index) => {
                    const isFav = favorites.some(item => item.id === l.id);
                    return (
                        <div 
                            key={l.id || index}
                            className="lyric-card"
                            style={{ '--lyric-color': l.color || '#3C2F2A', position: 'relative' }}
                            onClick={() => setSelectedLyric(l)}
                        >
                            {/* Botón de corazón igual al de tus otras secciones */}
                            <button 
                                className={`fav-btn ${isFav ? 'active' : ''}`}
                                onClick={(e) => toggleFavorite(e, l)}
                                title={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
                                aria-label="Favorito"
                            >
                                {isFav ? '♥' : '♡'}
                            </button>

                            <div className="lyric-card-inner">
                                <div className="lyric-card-quote">{l.quote}</div>
                                <div className="lyric-card-song-row">
                                    <div className="lyric-card-song-info">
                                        <span className="lyric-card-song">{l.song}</span>
                                        <span className="lyric-card-artist">{l.artist}</span>
                                    </div>
                                    <div className="lyric-spotify-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="12" fill="#1DB954"/>
                                            <path d="M17 10.2c-2.7-1.6-7.2-1.7-9.8-1-.3.1-.5.4-.4.7.1.3.4.5.7.4 2.3-.7 6.4-.5 8.8.9.3.2.6.1.8-.2.1-.3 0-.6-.1-.8zm-.2 2.3c-.2.3-.6.4-.9.2-2.3-1.4-5.7-1.8-8.4-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 3.1-.9 6.9-.5 9.5 1.1.3.2.4.6.2.9zm-1 2.3c-.2.2-.5.3-.8.1-2-1.2-4.5-1.5-7.4-.8-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.2-.7 6-.4 8.2 1 .3.2.4.5.3.8z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                {l.img && <img className="lyric-card-img" src={l.img} alt={l.song} loading="lazy" />}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal de detalle */}
            {selectedLyric && (
                <div 
                    id="lyric-overlay" 
                    className="lyric-overlay open" 
                    onClick={() => setSelectedLyric(null)}
                >
                    <div className="lyric-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="lyric-modal-close" onClick={() => setSelectedLyric(null)}>×</button>
                        
                        {/* Corazón dentro del modal */}
                        <button 
                            className={`fav-btn modal-fav ${favorites.some(item => item.id === selectedLyric.id) ? 'active' : ''}`}
                            onClick={(e) => toggleFavorite(e, selectedLyric)}
                            title="Favorito"
                        >
                            {favorites.some(item => item.id === selectedLyric.id) ? '♥' : '♡'}
                        </button>

                        {selectedLyric.img && (
                            <div 
                                className="lyric-modal-card-preview" 
                                style={{ backgroundColor: selectedLyric.color || '#3C2F2A' }}
                            >
                                <img src={selectedLyric.img} alt={selectedLyric.song} />
                            </div>
                        )}

                        <div className="lyric-modal-info">
                            <p className="lm-quote-text">{selectedLyric.quote}</p>
                            
                            <div className="lm-song-box">
                                <div className="lmsb-left">
                                    <span className="lmsb-song">{selectedLyric.song}</span>
                                    <span className="lmsb-artist">{selectedLyric.artist}</span>
                                </div>
                                {selectedLyric.spotify && (
                                    <a 
                                        href={selectedLyric.spotify} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="lm-spotify-btn"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                        </svg>
                                        Escuchar en Spotify
                                    </a>
                                )}
                            </div>

                            {selectedLyric.album && (
                                <div className="lm-album-tag">💿 {selectedLyric.album}</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}