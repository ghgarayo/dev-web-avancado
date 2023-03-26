import "./Header.css";

export default function Header() {
    return (
        <div className="container">
            <header className="d-flex ">
                <ul className="nav px-3 col-12 col-md-auto justify-content-center">
                    <li><a href="/" className="nav-link px-2">Home</a></li>
                    <li><a href="/planos" className="nav-link px-2">Planos</a></li>
                    <li><a href="/sobre" className="nav-link px-2">Sobre</a></li>
                </ul>
            </header>
        </div>
    )
}