export default function CadastroDadosPessoais({
  nome,
  email,
  telefone,
  onNomeChange,
  onEmailChange,
  onTelefoneChange,
}) {
  return (
    <div className="cadastro-dados-pessoais">
      <h4 className="dados-pessoais-titulo"> Dados Pessoais </h4>
      <input
        placeholder="Nome Completo"
        className="dados-input"
        type="text"
        value={nome}
        onChange={onNomeChange}
      />
      <input
        className="dados-input"
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={onEmailChange}
      />

      <input
        className="dados-input"
        placeholder="Telefone"
        type="tel"
        value={telefone}
        onChange={onTelefoneChange}
      />
    </div>
  );
}
