import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css"

import Header from './components/Header/index'
import ConfigRoutes from './ConfigRoutes';

function App() {
  return (
    <Router>
        <Header/>
        <ConfigRoutes />
    </Router>
  );
}

export default App;
