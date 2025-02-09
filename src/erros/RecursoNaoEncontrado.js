import ErroBase from "./ErroBase.js";

class RecursoNaoEncontrado extends ErroBase {
  constructor(mensagem = "Página não encontrada") {
    super(mensagem, 404);
  }
}

export default RecursoNaoEncontrado;
