import RetornoButtonHome from "../RetornoHomeButton/RetornoHomeButton";
import "./Plano.css";
import { Link } from "react-router-dom";

export const listaPlanos = [
  {
    id: "1",
    valor: "R$20,00 por mês",
    titulo: "Plano Básico",
    subtitulo: `Opção para quem quer economizar`,
    descricaoLinhaUm: "Séries e filmes em HD.",
    descricaoLinhaDois: "Até 2 telas simultâneas.",
  },
  {
    id: "2",
    valor: "R$30,00 por mês",
    titulo: "Plano Família",
    subtitulo: `O melhor custo-benefício`,
    descricaoLinhaUm: "Séries e filmes em Full HD.",
    descricaoLinhaDois: "Até 3 telas simultâneas.",
  },
  {
    id: "3",
    valor: "R$50,00 por mês",
    titulo: "Plano Ultra",
    subtitulo: `O mais completo.`,
    descricaoLinhaUm: "Séries e filmes em 4K.",
    descricaoLinhaDois: "Sem limitações.",
  },
];


export default function Plano() {
  return (
    <section className="subscription-container">
      <div className="planos-opcoes">
        {listaPlanos.map((plano) => {
          return (
            <div className="card-plano" key={plano.id}>
              <div className="card-plano-body">
                <h2 className="card-plano-title">{plano.titulo}</h2>
                <p className="plano-valor"> {plano.valor} </p>
                <h6 className="card-plano-subtitle text-body-secondary">
                  {plano.subtitulo}
                </h6>
                <ul className="descricao-plano">
                  <li>{plano.descricaoLinhaUm}</li>
                  <li>{plano.descricaoLinhaDois}</li>
                </ul>

                <div className="card-plano-bottom">
                  <Link to={`/planos/${plano.id}`} className="card-plano-link">
                    <div className="btn btn-primary my-2">Assine já!</div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <RetornoButtonHome />
    </section>
  );
}
