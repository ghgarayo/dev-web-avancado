import "./Comentarios.css";
import { useState, useEffect } from "react";
import noPicture from "../../assets/images/pessoa.svg";

export default function Comentarios({ nomeFilme }) {
  const comentarios = [
    {
      filme: "Avengers: Age of Ultron",
      comentarios: [
        {
          nome: "Lucas",
          usuario: "@lucas123",
          comentario: "Ótimo filme, muita ação e efeitos especiais incríveis!",
        },
        {
          nome: "Maria",
          usuario: "@maria456",
          comentario:
            "Adorei a história e os personagens, emocionante do começo ao fim.",
        },
      ],
    },
    {
      filme: "Avengers: Endgame",
      comentarios: [
        {
          nome: "Ana",
          usuario: "@ana123",
          comentario:
            "Um final épico para a saga dos Vingadores, recomendo muito!",
        },
        {
          nome: "João",
          usuario: "@joao456",
          comentario:
            "As cenas de batalha são impressionantes, e a história é emocionante.",
        },
        {
          nome: "Fernanda",
          usuario: "@fernanda789",
          comentario:
            "Não dá para conter as lágrimas, uma montanha russa de emoções!",
        },
        {
          nome: "Luiza",
          usuario: "@luiza456",
          comentario:
            "Thanos é um vilão incrível, e os personagens estão em sua melhor forma.",
        },
      ],
    },
    {
      filme: "Avengers: Infinity War",
      comentarios: [
        {
          nome: "Rafael",
          usuario: "@rafael789",
          comentario:
            "A trama é complexa e envolvente, e o final é de deixar qualquer um chocado",
        },
      ],
    },
    {
      filme: "Guardians of the Galaxy",
      comentarios: [
        {
          nome: "Gustavo",
          usuario: "@gustavo123",
          comentario:
            "Um filme espetacular, muita ação e surpresas do começo ao fim!",
        },
        {
          nome: "Mariana",
          usuario: "@mariana123",
          comentario:
            "Um filme divertido e cheio de aventura, com personagens engraçados!",
        },
        {
          nome: "Lucas",
          usuario: "@lucas456",
          comentario:
            "A trilha sonora é incrível e dá um toque especial ao filme.",
        },
        {
          nome: "Mariano",
          usuario: "@mariano789",
          comentario:
            "A mistura de comédia e ação espacial funciona muito bem, recomendo!",
        },
      ],
    },
    {
      filme: "Iron Man 2",
      comentarios: [
        {
          nome: "Rodrigo",
          usuario: "@rodrigo123",
          comentario:
            "Um filme divertido e com uma excelente atuação de Robert Downey Jr.",
        },
        {
          nome: "Cristina",
          usuario: "@cristina456",
          comentario:
            "A trama é envolvente, e a cena de luta no final é espetacular.",
        },
      ],
    },
  ];

  const [comentariosFiltrados, setComentariosFiltrados] = useState(null);

  useEffect(() => {
    const filme = comentarios.find((filme) => filme.filme === nomeFilme);
    if (filme) {
      setComentariosFiltrados(filme.comentarios);
    }
  }, [nomeFilme]);

  return (
    <div className="comentarios-container">
      <h2 className="comentarios-titulo">Comentários para {nomeFilme}</h2>
      {!comentariosFiltrados || comentariosFiltrados.length === 0 ? (
        <span className="nenhum-comentario">Nenhum comentário até agora!</span>
      ) : (
        <ul>
          {comentariosFiltrados.map((comentario, index) => (
            <li className="comentario" key={index}>
              <img
                src={noPicture}
                alt="Imagem do Usuário"
                className="usuario-imagem"
              />
              <div className="usuario-container">
                <div className="usuario-info">
                  <span className="usuario-nome me-2">{comentario.nome}</span>
                  <span className="usuario-usuario">
                    <strong>{comentario.usuario}</strong>
                  </span>
                </div>
                <p className="comentario-texto">{comentario.comentario}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
