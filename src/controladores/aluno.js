const service = require("../services/aluno");

module.exports = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const aluno = await service.getById(+id);
      if (!aluno) throw new Error("Aluno não encontrado");
      return res.json(aluno);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },

  getAll: async (req, res) => {
    const alunos = await service.getAll();
    return res.json(alunos);
  },

  create: async (req, res) => {
    try {
      const aluno = req.body;
      const alunoCriado = await service.create(aluno);
      return res.json(alunoCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const alunoDeletado = await service.delete(+id);
    return res.json(alunoDeletado);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const parcialAluno = req.body;

    const alunoAtualizado = await service.update(+id, parcialAluno);
    return res.json(alunoAtualizado);
  },
};
