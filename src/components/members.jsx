import { membersData } from "../data/mermbersData";

export function Integrantes(){
    const openMemberModal = (nombre) => {
        console.log('Abriste el modal de:', nombre);
    };

    const toggleFav = (nombre) => {
        console.log('Diste favorito a:', nombre);
    };
    
    return(
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
            onClick={() => openMemberModal(miembro.nombre)}
        >
        <div className={`member-avatar ${miembro.claseColor}`}>
            <img src={miembro.foto} alt={miembro.nombre} className="member-photo" />
            <button 
                className="fav-heart" 
                id={`fav-${miembro.id}`} 
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFav(miembro.nombre);
                }}
            >
            ♡
            </button>
            <span className="member-avatar-initial">{miembro.inicial}</span>
            <span className="member-name-overlay">{miembro.nombre}</span>
        </div>
        <div className="member-role-tag">{miembro.rol}</div>
        </div>
        ))}
        </div>
    </section>
    );
}