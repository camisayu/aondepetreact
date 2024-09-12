import { useState } from 'react';
import './App.css';

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

function App() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  }

  const pets = [
    { nome: 'Rex', sexo: 'M', imagem: 'https://plus.unsplash.com/premium_photo-1664371206019-a82ba8d7c2e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { nome: 'Mia', sexo: 'F', imagem: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { nome: 'Bobby', sexo: 'M', imagem: 'https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  return (
    <div className="App">
      <div className="header">
        {/* Menu Hamburger */}
        <button className="hamburger" onClick={ToggleMode}>
          &#9776;
        </button>

        {/* Título centralizado */}
        <b className="titulo">AondePet</b>

        {/* Imagem Redonda */}
        <img
          src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem redonda"
          className="round-image"
        />
      </div>

      {/* Menu */}
      <nav className={`menu ${active ? "open" : ""}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sua Conta</a></li>
          <li><a href="#">Informações do Pet</a></li>
        </ul>
      </nav>

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="buttons-container">
        <button className="filter-button">Cachorros</button>
        <button className="filter-button">Gatos</button>
        <button className="filter-button">Outros</button>
      </div>

      <div className="title">
        <h2>Pets</h2>
      </div>

      <div className="cards-container">
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>

    </div>
  );
}

export default App;
