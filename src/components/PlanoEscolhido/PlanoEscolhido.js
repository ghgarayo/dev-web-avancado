import "./PlanoEscolhido.css";
import React, { useState, useEffect} from "react";
import { listaPlanos } from "../Plano";

export default function PlanoEscolhido({ idPlanoSelecionado, onPlanoChange }) {
  const [planoSelecionado, setPlanoSelecionado] = useState({});

  useEffect(() => {
    const plano = listaPlanos.find((plano) => plano.id === idPlanoSelecionado);
    setPlanoSelecionado(plano);
  }, [idPlanoSelecionado]);
  
  return (
    <div className="cadastro-plano-escolhido">
      <h2 className="dados-plano-titulo">{planoSelecionado.titulo}</h2>
      <div className="plano-selecionado-valores">
        <p>Valor da compra: {planoSelecionado.valor}</p>
      </div>
      <h2 className="mudar-plano-titulo">Deseja mudar de plano?</h2>

      <div className="mudar-plano">
        {listaPlanos.map((plano, i) => {
          return (
            <div
              className="opcao-plano btn btn-primary mx-3"
              key={i}
              id={i+1}
              onClick={() => {
                const novoPlano = listaPlanos.find((p) => p.id === plano.id);
                setPlanoSelecionado(novoPlano);     
                onPlanoChange(novoPlano); 
              }}
            >
              {plano.titulo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
