import "./RetornoHomeButton.css";
import { Link } from "react-router-dom";

export default function RetornoButtonHome() {
  return (
    <Link to="/" className="return-home">
      {"< Voltar ao Inicio"}
    </Link>
  );
}
