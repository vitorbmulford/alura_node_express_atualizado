import RecursoNaoEncontrado from "../erros/RecursoNaoEncontrado.js";
import { autores } from "../models/index.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();

      res.status(200).json(autoresResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorResultado = await autores.findById(id);
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new RecursoNaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);

      const autorResultado = await autor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorAtualizado = await autores.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );

      if (!autorAtualizado) {
        console.log("ID não encontrado, acionando RecursoNaoEncontrado");
        return next(
          new RecursoNaoEncontrado(
            "Atualização mal sucedida, ID do Autor não encontrado"
          )
        );
      }

      res.status(200).send({ message: "Autor atualizado com sucesso" });
    } catch (erro) {
      console.log("Erro capturado no catch:", erro);
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorDeletado = await autores.findByIdAndDelete(id);

      if (!autorDeletado) {
        console.log("ID não encontrado, acionando RecursoNaoEncontrado");
        return next(
          new RecursoNaoEncontrado(
            "Delete mal sucedida, ID do Autor não encontrado"
          )
        );
      }

      res.status(200).send({ message: "Autor removido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
