import "./Cadastro.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Cadastro() {
  const { id } = useParams();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCartao, setNomeCartao] = useState("");
  const [cvcCartao, setCvcCartao] = useState("");

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

  const retornoLog = `
  -=-=-= Dados Pessoais =-=-=-
  Nome do cadastro: ${nome}
  Telefone: ${telefone}
  E-mail: ${email}
  
  -=-=-= Dados do Cartão =-=-=-
  Nome no cartão: ${nomeCartao}
  Número do cartão: ${numeroCartao}
  Código do CVC: ${cvcCartao}

  -=-=-= Plano Escolhido =-=-=- 

`;

  function showLog() {
    console.log(retornoLog);
  }

  return (
    <section className="cadastro-container">
      <div className="cadastro-dados-pessoais">
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" onChange={handleNomeChange} />

        <label htmlFor="telefone">Telefone:</label>
        <input type="text" name="telefone" onChange={handleTelefoneChange} />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={handleEmailChange} />
      </div>
      <div className="cadastro-dados-cartao">
        <form className="form">
          <label htmlFor="numero">Número do Cartão:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            maxLength="20"
            onChange={handleNumeroCartaoChange}
          />
          <label htmlFor="nome">Nome do Titular:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            onChange={handleNomeTitularChange}
          />
          <label htmlFor="cvc">Código CVC:</label>
          <input
            type="password"
            id="cvc"
            name="cvc"
            maxLength="3"
            onChange={handleCodigoCvcChange}
          />
        </form>
      </div>
      <button className="cadastro-submit" onClick={showLog}>
        Finalizar!
      </button>
    </section>
  );
}
