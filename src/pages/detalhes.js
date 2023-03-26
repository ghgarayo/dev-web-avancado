import React from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { filmes } from "../components/Filme/index.js";

import "./../assets/css/destaques.css";

function Detalhes() {
  const { filme } = useParams();

  return filmes.map((movieToBeShown, i) => {
    if (movieToBeShown.redirectTo === filme) {
      return (
        <div className="filme-destaque px-5" key={i}>
          <img
            src={`${movieToBeShown.imagem}`}
            alt={`${movieToBeShown.titulo}`}
          />
          <article className="main-text">
            <h1 className="filme-title">{movieToBeShown.titulo} - {movieToBeShown.subtitulo}</h1>
            <h6 className="filme-ano">{movieToBeShown.ano} </h6>
            <p className="filme-genero">{movieToBeShown.genero}</p>
            <p className="filme-sinopse">{movieToBeShown.sinopse}</p>
            <p className="filme-avalicao">
              Avaliação Rotten Tomatoes:{" "}
              <Link className="filme-avaliacao-link" to={movieToBeShown.linkAvalicacao}>
                {movieToBeShown.nota}
              </Link>
            </p>
            <Link
              to={`https://youtube.com/results?search_query=${movieToBeShown.titulo} Trailer ,`}
              className="filme-trailer"
            >
              <div className="btn btn-primary me-3">Trailer</div>
              <Link to="/" className="btn btn-primary">Voltar ao Inicio</Link>
            </Link>
          </article>
        </div>
      );
    }
  });
}

export default Detalhes;
