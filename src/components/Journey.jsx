import { useState, useEffect } from "react";
import { membersData } from "../data/mermbersData";
import * as discographyData from "../data/discography.js";

// Lee de forma segura una clave del localStorage
const readStorageKey = (key) => {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
};

    // Cruza los IDs guardados en "borahae_favorites" con los objetos de membersData
const resolveMembers = () => {
const savedIds = readStorageKey("borahae_favorites");
const list = Array.isArray(membersData)
    ? membersData
    : Object.values(membersData || {});

    return savedIds.map((item) => {
        if (typeof item === "object" && item !== null) return item;
        const found = list.find(
        (m) => m.id === item || m.name === item || m.stageName === item
        );
        return found || { id: item, name: String(item) };
    });
};

    // Cruza los IDs guardados en "borahae_favorite_albums" con discography.js (grupales y solistas)
const resolveAlbums = () => {
const savedIds = readStorageKey("borahae_favorite_albums");

const allAlbums = {
    ...(discographyData.groupAlbums || {}),
    ...(discographyData.soloAlbums || {}),
};

const allCovers = {
    ...(discographyData.albumCoverImages || {}),
    ...(discographyData.soloAlbumCovers || {}),
};

    return savedIds.map((item) => {
        if (typeof item === "object" && item !== null) return item;

        const albumInfo = allAlbums[item];
        const coverImg = allCovers[item];

        if (albumInfo || coverImg) {
        return {
            id: item,
            title: albumInfo?.title || albumInfo?.name || String(item),
            year: albumInfo?.year || albumInfo?.release || "",
            cover: coverImg || albumInfo?.cover || albumInfo?.img || null,
        };
        }

        return { id: item, title: String(item) };
    });
    };

    export function Journey() {
    const [favMembers, setFavMembers] = useState(() => resolveMembers());
    const [favAlbums, setFavAlbums] = useState(() => resolveAlbums());
    const [favEras, setFavEras] = useState(() =>
        readStorageKey("bts_eras_favorites")
    );
    const [favLyrics, setFavLyrics] = useState(() =>
        readStorageKey("bts_lyrics_favorites")
    );

    const syncFavorites = () => {
        setFavMembers(resolveMembers());
        setFavAlbums(resolveAlbums());
        setFavEras(readStorageKey("bts_eras_favorites"));
        setFavLyrics(readStorageKey("bts_lyrics_favorites"));
    };

    useEffect(() => {
        window.addEventListener("storage", syncFavorites);
        window.addEventListener("favoritesUpdated", syncFavorites);

        return () => {
        window.removeEventListener("storage", syncFavorites);
        window.removeEventListener("favoritesUpdated", syncFavorites);
        };
    }, []);

    const totalCount =
        favMembers.length + favAlbums.length + favEras.length + favLyrics.length;

    return (
        <section id="journey" className="favorites-section">
        <div className="favs-header fade-in">
            <div>
            <p className="section-tag">Tu colección personal</p>
            <h2 className="section-title">Mis Favoritos</h2>
            </div>
        </div>

        {totalCount === 0 ? (
            <div className="favs-empty-box fade-in">
            <span className="favs-empty-heart">♡</span>
            <p>Todavía no agregaste nada a tus favoritos.</p>
            <span>
                Tocá el corazón en Integrantes, Discografía, Eras o Letras y va a
                aparecer acá automáticamente.
            </span>
            </div>
        ) : (
            <div className="favs-categories fade-in">
            {/* 1. INTEGRANTES FAVORITOS */}
            {favMembers.length > 0 && (
                <div className="favs-group">
                <h3 className="favs-group-title">
                    Integrantes <span className="favs-count">{favMembers.length}</span>
                </h3>
                <div className="favs-cards-grid">
                    {favMembers.map((member, idx) => {
                    const name = member.name || member.stageName || member.id;
                    const role = member.role || "BTS";
                    const photo =
                        member.photo || member.img || member.image || null;

                    return (
                        <div key={member.id || idx} className="fav-item-card">
                        {photo && (
                            <img
                            src={photo}
                            alt={name}
                            className="fav-item-thumb"
                            />
                        )}
                        <div className="fav-item-info">
                            <span className="fav-item-name">{name}</span>
                            {role && <span className="fav-item-meta">{role}</span>}
                        </div>
                        <span className="fav-item-heart">♥</span>
                        </div>
                    );
                    })}
                </div>
                </div>
            )}

            {/* 2. ÁLBUMES / DISCOS FAVORITOS */}
            {favAlbums.length > 0 && (
                <div className="favs-group">
                <h3 className="favs-group-title">
                    Discografía <span className="favs-count">{favAlbums.length}</span>
                </h3>
                <div className="favs-cards-grid">
                    {favAlbums.map((album, idx) => {
                    const title = album.title || album.name || album.id;
                    const year = album.year || "";
                    const cover =
                        album.cover || album.img || album.image || null;

                    return (
                        <div key={album.id || idx} className="fav-item-card">
                        {cover && (
                            <img
                            src={cover}
                            alt={title}
                            className="fav-item-thumb"
                            />
                        )}
                        <div className="fav-item-info">
                            <span className="fav-item-name">{title}</span>
                            {year && <span className="fav-item-meta">{year}</span>}
                        </div>
                        <span className="fav-item-heart">♥</span>
                        </div>
                    );
                    })}
                </div>
                </div>
            )}

            {/* 3. ERAS FAVORITAS */}
            {favEras.length > 0 && (
                <div className="favs-group">
                <h3 className="favs-group-title">
                    Eras <span className="favs-count">{favEras.length}</span>
                </h3>
                <div className="favs-cards-grid">
                    {favEras.map((era, idx) => {
                    const title = typeof era === "string" ? era : era.title;
                    const period = typeof era === "object" ? era.period : "";

                    return (
                        <div key={era.id || idx} className="fav-item-card">
                        <div className="fav-item-info">
                            <span className="fav-item-name">{title}</span>
                            {period && (
                            <span className="fav-item-meta">{period}</span>
                            )}
                        </div>
                        <span className="fav-item-heart">♥</span>
                        </div>
                    );
                    })}
                </div>
                </div>
            )}

            {/* 4. LETRAS / FRASES FAVORITAS */}
            {favLyrics.length > 0 && (
                <div className="favs-group">
                <h3 className="favs-group-title">
                    Letras que dejan huella{" "}
                    <span className="favs-count">{favLyrics.length}</span>
                </h3>
                <div className="favs-lyrics-grid">
                    {favLyrics.map((lyric, idx) => (
                    <div
                        key={lyric.id || idx}
                        className="fav-lyric-card"
                        style={{ borderLeftColor: lyric.color || "var(--accent)" }}
                    >
                        <p className="fav-lyric-quote">“{lyric.quote}”</p>
                        <div className="fav-lyric-footer">
                        <span>
                            {lyric.song} — {lyric.artist}
                        </span>
                        <span className="fav-item-heart">♥</span>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>
        )}
        </section>
    );
}