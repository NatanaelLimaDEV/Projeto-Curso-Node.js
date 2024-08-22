const service = require("../services/professor");

module.exports = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const professor = await service.getById(+id);
      if (!professor) throw new Error("Professor não encontrado");
      return res.json(professor);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },

  getAll: async (req, res) => {
    const professores = await service.getAll();
    return res.json(professores);
  },

  create: async (req, res) => {
    try {
      const professor = req.body;
      const professorCriado = await service.create(professor);
      return res.json(professorCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const professorDeletado = await service.delete(+id);
    return res.json(professorDeletado);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const parcialProfessor = req.body;

    const professorAtualizado = await service.update(+id, parcialProfessor);
    return res.json(professorAtualizado);
  },
};
