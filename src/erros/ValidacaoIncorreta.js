import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ValidacaoIncorreta extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagensErro = erro.errors
      ? Object.values(erro.errors)
          .map((err) => err.message)
          .join("; ")
      : "Erro de validação desconhecido";

    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ValidacaoIncorreta;
