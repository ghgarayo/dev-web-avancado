import "./Pesquisa.css";

import { useState } from "react";

export default function Pesquisa(props) {
  console.log("props", props);
  const [pesquisa, setPesquisa] = useState([1]);
  const { listaFilmes } = props;

  return (
    <div className="pesquisa-container">
      <p className="pesquisa-titulo">Já sabe o que assistir?</p>
      <input
        className="pesquisa-input"
        name="pesquisa"
        placeholder="Faça aqui sua pesquisa rápida!"
        onBlur={(e) => {
          const textoDigitado = e.target.value;
          console.log("texto digitado:", textoDigitado);
          console.log("tamanho do texto digitado: ", textoDigitado.length);

          {
            textoDigitado !== ""
              ? setPesquisa(
                  listaFilmes.filter((filme) =>
                    filme.titulo
                      .toLowerCase()
                      .includes(textoDigitado.toLowerCase())
                  )
                )
              : setPesquisa("");
          }
        }}
      />
      {pesquisa.length > 1 && pesquisa !== "" ? (
        <div className="resultado-pesquisa">
          <div className="row">
              {pesquisa.map((filme, i) => (
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
              ))}
          </div>
        </div>
      ) : (
        <>Nada Encontrado</>
      )}
    </div>
  );
}
