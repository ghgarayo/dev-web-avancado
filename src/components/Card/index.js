import "./Card.css";

import JohnWick from "./../../assets/images/john-wick-de-volta-ao-jogo.jpg";
import JohnWick2 from "./../../assets/images/john-wick-2.png";
import JohnWick3 from "./../../assets/images/John_Wick_3_Parabellum.png";
import JohnWick4 from "./../../assets/images/images.jpeg";

import { Link } from "react-router-dom";

export const filmes = [
  {
    titulo: "John Wick",
    subtitulo: "De Volta ao Jogo",
    imagem: JohnWick,
    ano: "2014",
    genero: "Ação/Suspense",
    sinopse:
      "Depois que seu cachorro é morto por uma gangue russa liderada pelo filho de seu antigo chefe, o ex-assassino John Wick parte em busca de vingança. Com uma recompensa de dois milhões de dólares por sua cabeça, luta pela sobrevivência enquanto tenta eliminar todos os responsáveis.",
    nota: "86%",
    linkAvalicacao: "https://www.rottentomatoes.com/m/john_wick",
    redirectTo: "john-wick",
  },
  {
    titulo: "John Wick 2",
    subtitulo: "Um Novo Dia Para Matar",
    imagem: JohnWick2,
    ano: "2017",
    genero: "Ação/Suspense",
    sinopse:
      "John Wick busca vingança após ter seu carro roubado e é obrigado a matar a irmã de um senhor do crime. Ele cumpre a missão, mas é perseguido e acaba sendo excomungado depois de matar o mandante.",
    nota: "89%",
    linkAvalicacao: "https://www.rottentomatoes.com/m/john_wick_chapter_2",
    redirectTo: "john-wick-chapter-2",
  },
  {
    titulo: "John Wick 3",
    subtitulo: "Parabellum",
    imagem: JohnWick3,
    ano: "2019",
    genero: "Ação/Suspense",
    sinopse:
      "John Wick é caçado por assassinos em todo o mundo devido a um contrato global de US$ 14 milhões por sua cabeça e por quebrar a regra do Hotel Continental. Ele tem uma hora de vantagem para fugir antes de ser declarado 'Excomungado' e perder todos os seus recursos do submundo",
    nota: "89%",
    linkAvalicacao:
      "https://www.rottentomatoes.com/m/john_wick_chapter_3_parabellum",
    redirectTo: "john-wick-chapter-3",
  },
  {
    titulo: "John Wick 4",
    subtitulo: "Baba Yaga",
    imagem: JohnWick4,
    ano: "2023",
    genero: "Ação/Suspense",
    sinopse:
      "John Wick descobre um caminho para derrotar a Alta Cúpula. Mas antes que ele possa ganhar sua liberdade, Sr. Wick deve enfrentar um novo inimigo com poderosas alianças em todo o mundo e forças que transformam velhos amigos em inimigos.",
    nota: "89%",
    linkAvalicacao: "https://www.rottentomatoes.com/m/john_wick_chapter_4",
    redirectTo: "john-wick-chapter-4",
  },
];

export default function Filme() {
  return (
    <div className="container ">
      {/* <p className='title px-3 py-1 btn-primary'> Filmes em Destaque </p>     */}
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="d-flex card">
              <img
                src={`${filme.imagem}`}
                alt={filme.titulo}
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-center">
                  {filme.titulo} <br />
                  {filme.subtitulo} - ({filme.ano})
                </h5>
                <Link to={`/detalhes/${filme.redirectTo}`}>
                  <div className="btn btn-primary my-2">Detalhes</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
