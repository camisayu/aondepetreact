import { useState } from 'react';
import './PetCard.css'; // Crie um arquivo CSS separado para estilos específicos

function PetCard({ pet }) {
    const [favorito, setFavorito] = useState(false);

    return (
      <div className="pet-card">
        <img src={pet.imagem} alt={pet.nome} className="pet-image" />
        <div className="pet-info">
          <h2 className="pet-name">{pet.nome}</h2>
          <div className="pet-details">
            <span className="pet-sex">
              {pet.sexo === 'M' ? '♂' : '♀'}
            </span>
            <button 
              className={`favorite-button ${favorito ? 'selected' : ''}`} 
              onClick={() => setFavorito(!favorito)}
            >
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
}

export default PetCard;