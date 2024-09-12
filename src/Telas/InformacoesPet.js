import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  
          <button className="hamburger1" onClick={ToggleMode}>
            &#9776;
          </button>
        </div>
  
        <nav className={`menu1 ${active ? "open" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/conta">Sua Conta</Link></li>
            <li><Link to="/informacoes-pet">Informações do Pet</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default InformacoesPet;