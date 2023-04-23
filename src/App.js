import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";

import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import Header from './components/Header/index'
import NotFound from './pages/notfound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='planos' element={<Planos />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path='detalhes/:filme' element={<Detalhes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
