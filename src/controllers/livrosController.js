import { autores, livros } from "../models/index.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();

      req.resultado = buscaLivros;

      next();
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros
        .findById(id)
        .populate("autor", "nome")
        .exec();

      res.status(200).send(livroResultados);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Livro atualizado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndDelete(id);

      res.status(200).send({ message: "Livro removido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = req.query;
      const busca = {};

      if (titulo) {
        const regex = new RegExp(titulo, "i");
        busca.titulo = { $regex: regex };
      }

      if (editora) busca.editora = editora;

      if (minPaginas || maxPaginas) {
        busca.numeroPaginas = {};
        if (minPaginas) busca.numeroPaginas.$gte = Number(minPaginas);
        if (maxPaginas) busca.numeroPaginas.$lte = Number(maxPaginas);
      }

      if (nomeAutor) {
        const regexAutor = new RegExp(nomeAutor, "i");
        const autor = await autores.findOne({ nome: { $regex: regexAutor } });

        if (!autor) {
          return res.status(404).send({ message: "Autor não encontrado." });
        }

        busca.autor = autor._id;
      }

      console.log("Consulta montada:", busca);

      const livrosResultado = await livros.find(busca).populate("autor");

      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };
}

export default LivroController;
