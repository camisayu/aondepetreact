import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Atualize para Routes
import Home from './Telas/Home';
import InformacoesPet from './Telas/InformacoesPet';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacoes-pet" element={<InformacoesPet />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
}

export default App;
