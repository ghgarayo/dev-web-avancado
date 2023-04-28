import { useState } from "react";
import "./JaAssistido.css";

export default function JaAssistido(props) {
  const [{ assistido }, setAssistido] = useState(props);

  return assistido ? (
    <button className="assistir btn btn-primary" title="Assistir">
      Assistir
    </button>
  ) : (
    <button
      className="assistir-novamente btn btn-secondary"
      title="Assistir Novamente"
    >
      Assistir Novamente
    </button>
  );
}
