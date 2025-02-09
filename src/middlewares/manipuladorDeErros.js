import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ValidacaoIncorreta from "../erros/ValidacaoIncorreta.js";
import RecursoNaoEncontrado from "../erros/RecursoNaoEncontrado.js";

function manipuladorDeErros(erro, req, res, next) {
  console.log("Erro capturado no middleware:", erro);

  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    console.log(erro.errors);
    new ValidacaoIncorreta(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;
