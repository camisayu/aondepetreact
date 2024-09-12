import { useState } from 'react';
import { BrowserRouter as Link, useNavigate } from 'react-router-dom';  // Atualize para Routes
import './InformacoesPet.css';

function InformacoesPet() {
    const navigate = useNavigate();
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
      setMode(!active);
    }
    return (
      <div className="informacoes-pet">
        <div className="header">
  
        <button className="back-button" onClick={() => navigate("/")}>
          <i className="fas fa-chevron-left"></i> {/* Ícone de meia seta */}
        </button>
  
          <button className="hamburger" onClick={ToggleMode}>
            &#9776;
          </button>
        </div>
  
        <nav className={`menu ${active ? "open" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/conta">Sua Conta</Link></li>
            <li><Link to="/informacoes-pet">Informações do Pet</Link></li>
          </ul>
        </nav>
  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      </div>
    );
  }
  
  export default InformacoesPet;