import "./Pesquisa.css";
import { useState, useEffect } from "react";

export default function Pesquisa(props) {
  const [textoDigitado, setTextoDigitado] = useState("");
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);
  const [pesquisaValida, setPesquisaValida] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { listaFilmes } = props;

  useEffect(() => {
    setLoading(true);
    setError("");

    if (textoDigitado.trim() === "") {
      setFilmesFiltrados([]);
      setLoading(false);
      return;
    }

    try {
      const filtered = filterMovies(textoDigitado, listaFilmes);
      setFilmesFiltrados(filtered);
      setLoading(false);
      if (filtered.length === 0) {
        setError(<p className="erro-pesquisa">Nenhum filme encontrado. Verifique sua pesquisa.</p>);
      }
    } catch (error) {
      setError("Erro! Verifique sua pesquisa.");
      setLoading(false);
    }
  }, [textoDigitado, listaFilmes]);

  function filterMovies(textoDigitado, listaFilmes) {
    const filmesFiltrados = listaFilmes.filter((filme) =>
        filme.titulo.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        filme.ano.toString().includes(textoDigitado)
    );
    return filmesFiltrados;
  }

  function handleTextChange(event) {
    setTextoDigitado(event.target.value);
    setPesquisaValida(true)
  }

  return (
    <div className="pesquisa-container">
      <p className="pesquisa-titulo">Já sabe o que assistir?</p>
      <input
        className="pesquisa-input"
        name="pesquisa"
        placeholder="Faça aqui sua pesquisa rápida!"
        value={textoDigitado}
        onChange={handleTextChange}
      />
      {loading && <div>Carregando...</div>}
      {error && <div>{error}</div>}
      {filmesFiltrados.length > 0 && (
        <div className="resultado-pesquisa">
          <div className="row">
            {filmesFiltrados.map((movie) => (
              <div className="col" key={movie.id}>
                <div className="d-flex card">
                  <img
                    src={`${movie.poster}`}
                    alt={movie.titulo}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-center">
                      {movie.titulo} - {movie.ano}
                    </h5>
                    <a href={`/detalhes/${movie.id}`}>
                      <div className="btn btn-primary my-2">Detalhes</div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!pesquisaValida && filmesFiltrados.length === 0 && !loading && (
        <div className="resultado-pesquisa">
          <p className="erro-pesquisa">Nenhum filme encontrado. Verifique sua pesquisa.</p>
        </div>
      )}
    </div>
  );
}
