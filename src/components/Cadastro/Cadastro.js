import "./Cadastro.css";

import { useState } from "react";
import { useParams } from "react-router-dom";

import CadastroDadosPessoais from "./CadastoDadosPessoais";
import CadastroDadosCartao from "./CadastoDadosCartao";
import PlanoEscolhido from "../PlanoEscolhido/PlanoEscolhido";
import RetornoButtonHome from "../RetornoHomeButton/RetornoHomeButton";

export default function Cadastro() {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [cvcCartao, setCvcCartao] = useState("");

  const [plano, setPlano] = useState({});

  
  function handleNomeChange(e) {
    setNome(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  
  function handleTelefoneChange(e) {
    setTelefone(e.target.value);
  }

  function handleNumeroCartaoChange(e) {
    setNumeroCartao(e.target.value);
  }
  
  function handleCodigoCvcChange(e) {
    setCvcCartao(e.target.value);
  }
  
  function handleNomeTitularChange(e) {
    setNomeCartao(e.target.value);
  }
  
  function handlePlanoChange(novoPlano) {
    setPlano(novoPlano);
  }

  const retornoLog = `
  -=-=-= Dados Pessoais =-=-=-
  Nome do cadastro: ${nome}
  Telefone: ${telefone}
  E-mail: ${email}
  
  -=-=-= Dados do Cartão =-=-=-
  Nome no cartão: ${nomeCartao}
  Número do cartão: ${numeroCartao}
  Código do CVC: ${cvcCartao}

  -=-=-= Plano =-=-=- 
  Plano Escolhido: ${plano.titulo}
  Valor: ${plano.valor}
`;

  function showLog() {
    console.log(retornoLog);
  }

  return (
    <section className="cadastro-container">
      <div className="form">
        <h1 className="cadastro-titulo"> Finalize seu cadastro! </h1>
        <div className="cadastro-inputs">
          <CadastroDadosPessoais
            nome={nome}
            email={email}
            telefone={telefone}
            onNomeChange={handleNomeChange}
            onEmailChange={handleEmailChange}
            onTelefoneChange={handleTelefoneChange}
          />
          <CadastroDadosCartao
            numeroCartao={numeroCartao}
            nomeCartao={nomeCartao}
            cvcCartao={cvcCartao}
            onNumeroCartaoChange={handleNumeroCartaoChange}
            onNomeCartaoChange={handleNomeTitularChange}
            onCvcCartaoChange={handleCodigoCvcChange}
          />
          <PlanoEscolhido
            onPlanoChange={handlePlanoChange}
            idPlanoSelecionado={id}
          />
        </div>
        <div className="buttons-container">
          <button className="cadastro-submit btn btn-success" onClick={showLog}>
            Finalizar!
          </button>
          <RetornoButtonHome />
        </div>
      </div>
    </section>
  );
}
