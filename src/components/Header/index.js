import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="container">
            <header className="d-flex ">
                <ul className="nav px-3 col-12 col-md-auto justify-content-center">
                    <li><Link to="/" className="nav-link px-2">Home</Link></li>
                    <li><Link to="/planos" className="nav-link px-2">Planos</Link></li>
                    <li><Link to="/sobre" className="nav-link px-2">Sobre</Link></li>
                </ul>
            </header>
        </div>
    )
}