import { useEffect, useState } from "react";
import "./ListaFilmesAPI.css";
import Pesquisa from "../Pesquisa/Pesquisa";

export default function ListaFilmesAPI() {
  const options = { method: "get" };
  const [listaFilmes, setListaFilmes] = useState(null);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/marycamila184/movies/movies",
      options
    )
      .then((response) => response.json())
      .then((listaFilmes) => setListaFilmes(listaFilmes));
  }, []);

  return (
    <>
      <Pesquisa listaFilmes={listaFilmes} />
      <div className="container ">
        <p className="title px-3 py-1 btn-primary"> Filmes em Destaque: </p>
        <div className="row">
          {listaFilmes ? (
            listaFilmes.map((filme, i) => (
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
                    <a href={`/detalhes/${filme.id}`}>
                      <div className="btn btn-primary my-2">Detalhes</div>
                    </a>
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
