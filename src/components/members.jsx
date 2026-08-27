export function Integrantes(){
    return(
    <section id="members">
        <div className="fade-in">
            <p className="section-tag">Los siete</p>
            <h2 className="section-title">Integrantes</h2>
        </div>
        <div className="members-grid fade-in">
            <div className="member-card" onclick="openMemberModal('RM')">
                <div className="member-avatar m1">
                    <img src="imagenes/miembros/Rm.webp" className="member-photo"/>
                    <button className="fav-heart" id="fav-RM" onclick="event.stopPropagation();toggleFav('RM')">♡</button>
                    <span className="member-avatar-initial"></span>
                    <span className="member-name-overlay">RM</span>
                </div>
                <div className="member-role-tag">Líder · Rapero</div>
            </div>
            <div className="member-card" onclick="openMemberModal('Jin')">
                <div className="member-avatar m2">
                    <img src="imagenes/miembros/Jin.webp" className="member-photo"/>
                    <button className="fav-heart" id="fav-Jin" onclick="event.stopPropagation();toggleFav('Jin')">♡</button>
                    <span className="member-avatar-initial"></span>
                    <span className="member-name-overlay">Jin</span>
                </div>
                <div className="member-role-tag">Vocalista</div>
            </div>
            <div className="member-card" onclick="openMemberModal('Suga')">
                <div className="member-avatar m3">
                    <img src="imagenes/miembros/Suga.webp" className="member-photo"/>
                    <button className="fav-heart" id="fav-Suga" onclick="event.stopPropagation();toggleFav('Suga')">♡</button>
                    <span className="member-avatar-initial"></span>
                    <span className="member-name-overlay">Suga</span>
                </div>
                <div className="member-role-tag">Rapero · Productor</div>
            </div>
            <div className="member-card" onclick="openMemberModal('J-Hope')">
                <div className="member-avatar m4">
                    <img src="imagenes/miembros/J-Hope.webp" className="member-photo"/>
                    <button className="fav-heart" id="fav-J-Hope" onclick="event.stopPropagation();toggleFav('J-Hope')">♡</button>
                    <span className="member-avatar-initial"></span>
                    <span className="member-name-overlay">J-Hope</span>
                </div>
                <div className="member-role-tag">Rapero · Bailarín</div>
            </div>
            <div className="member-card" onclick="openMemberModal('Jimin')">
                <div className="member-avatar m5">
                    <img src="imagenes/miembros/Jimin.webp" className="member-photo"/>
                    <button className="fav-heart" id="fav-Jimin" onclick="event.stopPropagation();toggleFav('Jimin')">♡</button>
                    <span className="member-avatar-initial"></span>
                    <span className="member-name-overlay">Jimin</span>
                </div>
                <div className="member-role-tag">Vocalista · Bailarín</div>
            </div>
            <div className="member-card" onclick="openMemberModal('V')">
                <div className="member-avatar m6">
                    <img src="imagenes/miembros/V.webp" className="member-photo"/>
                    <button className="fav-heart" id="fav-V" onclick="event.stopPropagation();toggleFav('V')">♡</button>
                    <span className="member-avatar-initial"></span>
                    <span className="member-name-overlay">V</span>
                </div>
                <div className="member-role-tag">Vocalista</div>
            </div>
            <div className="member-card" onclick="openMemberModal('Jungkook')">
                <div className="member-avatar m7">
                    <img src="imagenes/miembros/Jungkook.webp" className="member-photo"/>
                    <button className="fav-heart" id="fav-Jungkook" onclick="event.stopPropagation();toggleFav('Jungkook')">♡</button>
                    <span className="member-avatar-initial"></span>
                    <span className="member-name-overlay">Jungkook</span>
                </div>
                <div className="member-role-tag">Vocalista Principal</div>
            </div>
        </div>
    </section>
    );
}