import { membersData } from "../data/mermbersData";
import { useState, useEffect } from "react";

export function Integrantes() {
    // 1. ESTADO PARA EL MODAL DEL INTEGRANTE SELECCIONADO
    const [selectedMember, setSelectedMember] = useState(null);

    const openMemberModal = (miembro) => {
        setSelectedMember(miembro);
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    // 2. INICIALIZAR EL ESTADO DE FAVORITOS LEYENDO DEL LOCALSTORAGE
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("borahae_favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // 3. GUARDAR EN EL LOCALSTORAGE CADA VEZ QUE CAMBIEN LOS FAVORITOS
    useEffect(() => {
        localStorage.setItem("borahae_favorites", JSON.stringify(favorites));
    }, [favorites]);

    // 4. FUNCIÓN PARA AGREGAR O QUITAR DE FAVORITOS
    const toggleFavorite = (memberId) => {
        if (favorites.includes(memberId)) {
            setFavorites(favorites.filter((id) => id !== memberId));
        } else {
            setFavorites([...favorites, memberId]);
        }
    };

    // 5. RENDERIZADO (Tus elementos del return intactos)
    return (
        <section id="members">
            <div className="fade-in">
                <p className="section-tag">Los siete</p>
                <h2 className="section-title">Integrantes</h2>
            </div>

            <div className="members-grid fade-in">
                {membersData.map((miembro) => (
                    <div
                        key={miembro.id}
                        className="member-card"
                        onClick={() => openMemberModal(miembro)}
                    >
                        <div className={`member-avatar ${miembro.claseColor}`}>
                            <img src={miembro.foto} alt={miembro.nombre} className="member-photo" />
                            <button
                                className="fav-heart"
                                id={`fav-${miembro.id}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(miembro.id);
                                }}
                            >
                                {favorites.includes(miembro.id) ? "♥" : "♡"}
                            </button>
                            <span className="member-avatar-initial">{miembro.inicial}</span>
                            <span className="member-name-overlay">{miembro.nombre}</span>
                        </div>
                        <div className="member-role-tag">{miembro.rol}</div>
                    </div>
                ))}
            </div>

            {/* EL MODAL VA ACÁ AL FINAL, DENTRO DEL RETURN Y DE LA SECCIÓN */}
            {selectedMember && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Botón de cierre */}
                        <button className="modal-close-btn" onClick={closeModal}>×</button>
                        <div className="modal-body">
                            {/* Columna Izquierda: Imagen */}
                            <div className="modal-image-container">
                                <img
                                    src={selectedMember.foto}
                                    alt={selectedMember.nombre}
                                    className="modal-photo"
                                />
                            </div>
                            {/* Columna Derecha: Contenido */}
                            <div className="modal-info">
                                <span className="modal-tag">{selectedMember.rol}</span>
                                <h2 className="modal-title">{selectedMember.nombre}</h2>
                                <p className="modal-bio">{selectedMember.bio}</p>
                                {/* Ficha técnica leyendo los facts dinámicamente */}
                                {selectedMember.facts && (
                                    <div className="modal-facts">
                                        {Object.entries(selectedMember.facts).map(([titulo, valor]) => (
                                            <div key={titulo} className="fact-item">
                                                <span className="fact-label">{titulo}:</span>
                                                <span className="fact-value">{valor}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}