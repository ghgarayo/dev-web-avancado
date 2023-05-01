import "./ListaFilmesAPI.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pesquisa from "../Pesquisa/Pesquisa";
import JaAssistido from "../JaAssistido/JaAssistido";
import Filtro from "../Filtro/Filtro";

export default function ListaFilmesAPI() {
  
  const options = { method: "get" };
  const [listaFilmes, setListaFilmes] = useState(null);
  const [filtroSelecionado, setFiltroSelecionado] = useState("titulo");
  const [ordemSelecionada, setOrdemSelecionada] = useState("asc");

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/marycamila184/movies/movies",
      options
    )
      .then((response) => response.json())
      .then((listaFilmes) => setListaFilmes(listaFilmes));
  }, []);

  function handleFiltroSelecionado(filtro) {
    setFiltroSelecionado(filtro);
  }

  function handleOrdemSelecionada(ordem) {
    setOrdemSelecionada(ordem);
  }

  function ordenarListaFilmes(filmes, filtro, ordem) {
    return filmes.sort((a, b) => {
      if (ordem === "asc") {
        if (a[filtro] < b[filtro]) {
          return -1;
        }
        if (a[filtro] > b[filtro]) {
          return 1;
        }
        return 0;
      } else {
        if (a[filtro] > b[filtro]) {
          return -1;
        }
        if (a[filtro] < b[filtro]) {
          return 1;
        }
        return 0;
      }
    });
  }

  const listaOrdenada = listaFilmes
    ? ordenarListaFilmes(listaFilmes, filtroSelecionado, ordemSelecionada)
    : null;

  return (
    <>
      <Pesquisa listaFilmes={listaOrdenada} />
      <Filtro onFiltroSelecionado={handleFiltroSelecionado} onOrdemSelecionada={handleOrdemSelecionada} />
      <div className="container ">
        <p className="titulo"> Todos os Filmes Disponiveis</p>
        <div className="linha">
          {listaOrdenada ? (
            listaOrdenada.map((filme, i) => (
              <div className="col" key={i}>
                <div className="d-flex card">
                  <img
                    src={`${filme.poster}`}
                    alt={filme.titulo}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-center">
                      {filme.titulo} - {filme.ano}
                    </h5>
                    <p className="card-rating">Nota: {filme.nota}</p>
                    <div className="card-button-container">
                      <Link to={`/detalhes/${filme.id}`}>
                        <div className="btn btn-primary my-2">Detalhes</div>
                      </Link>
                      <JaAssistido assistido={filme.assistido}></JaAssistido>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
}
