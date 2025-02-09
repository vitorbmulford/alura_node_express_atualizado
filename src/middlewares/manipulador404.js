import RecursoNaoEncontrado from "../erros/RecursoNaoEncontrado.js";

function manipulador404(req, res, next) {
  const erro404 = new RecursoNaoEncontrado();
  next(erro404);
}
export default manipulador404;
