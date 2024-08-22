const prisma = require("@prisma/client");
const { getById } = require("../controladores/professor");
const { update } = require("../controladores/professor");
const { buildTelefonePrismaQuery } = require("../utils");

const prismaClient = new prisma.PrismaClient();

module.exports = {
  create: async ({ telefones, ...professor }) => {
    const professorCriado = await prismaClient.professor.create({
      data: {
        ...professor,
        telefones: buildTelefonePrismaQuery(telefones),
      },
    });

    return professorCriado;
  },

  getAll: async () => {
    const professores = await prismaClient.professor.findMany({
      include: {
        telefones: {
          select: {
            telefone: true,
          },
        },
      },
    });
    return professores;
  },

  getById: async (id) => {
    const professor = await prismaClient.professor.findUnique({
      where: {
        id,
      },
      include: {
        telefones: {
          select: {
            telefone: true,
          },
        },
      },
    });

    return professor;
  },

  delete: async (id) => {
    const professorDeletado = await prismaClient.professor.delete({
      where: {
        id,
      },
    });

    return professorDeletado;
  },

  update: async (id, { telefones, ...parcialProfessor }) => {
    const professorAtualizado = await prismaClient.professor.update({
      where: {
        id,
      },
      data: {
        ...parcialProfessor,
        telefones: buildTelefonePrismaQuery(telefones),
      },
    });

    return professorAtualizado;
  },
};
