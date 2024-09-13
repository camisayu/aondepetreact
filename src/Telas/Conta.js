import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Conta.css'; // Importe o arquivo CSS se estiver usando um

const Conta = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <button className="back-button" onClick={() => navigate("/")}>
        <i className="fas fa-chevron-left"></i> {/* Ícone de meia seta */}
      </button>
      {/* Você pode adicionar outros elementos ou conteúdo aqui */}
    </div>
  );
};

export default Conta;
