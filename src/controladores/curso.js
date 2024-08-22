const service = require("../services/curso");

module.exports = {
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const curso = await service.getById(+id);
      if (!curso) throw new Error("Curso não encontrado");
      return res.json(curso);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  },

  getAll: async (req, res) => {
    const cursos = await service.getAll();
    return res.json(cursos);
  },

  create: async (req, res) => {
    try {
      const curso = req.body;
      const cursoCriado = await service.create(curso);
      return res.json(cursoCriado);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const cursoDeletado = await service.delete(+id);
    return res.json(cursoDeletado);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const parcialCurso = req.body;

    const cursoAtualizado = await service.update(+id, parcialCurso);
    return res.json(cursoAtualizado);
  },
};
