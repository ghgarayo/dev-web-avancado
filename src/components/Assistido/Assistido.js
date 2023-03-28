export default function Assistido(assistido) {
  console.log(assistido);

  if (assistido) {
    return <p className="error">Já assistido</p>;
  } else {
    return <p className="text-success">Não assistido!</p>;
  }
}
