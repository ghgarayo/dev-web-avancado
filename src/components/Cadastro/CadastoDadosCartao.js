export default function CadastroDadosCartao({
  numeroCartao,
  nomeCartao,
  cvcCartao,
  onNumeroCartaoChange,
  onNomeCartaoChange,
  onCvcCartaoChange,
}) {
  return (
    <div className="cadastro-dados-cartao">
        <h4 className="dados-cartoes-titulo">Dados do Cartão</h4>
        <input
          className="dados-input"
          placeholder="Número do Cartão"
          type="text"
          id="numero"
          name="numero"
          maxLength="20"
          value={numeroCartao}
          onChange={onNumeroCartaoChange}
        />
        <input
          className="dados-input"
          placeholder="Nome do Titular"
          type="text"
          id="nome"
          name="nome"
          value={nomeCartao}
          onChange={onNomeCartaoChange}
        />
        <input
          className="dados-input"
          placeholder="CVC"
          type="password"
          id="cvc"
          name="cvc"
          maxLength="3"
          value={cvcCartao}
          onChange={onCvcCartaoChange}
        />
    </div>
  );
}
