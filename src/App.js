import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";

import Header from './components/Header/index'
import Home from './pages/home';
import Planos from './pages/planos';
import Cadastro from './components/Cadastro/Cadastro';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import NotFound from './pages/notfound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='planos' element={<Planos />} />
          <Route path='planos/:id' element={<Cadastro />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path='detalhes/:filme' element={<Detalhes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
