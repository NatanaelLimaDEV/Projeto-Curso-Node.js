const express = require("express")
const controlador = require("../controladores/aluno")

const router = express.Router()

router.post("/aluno", controlador.create)

router.get("/aluno", controlador.getAll)

router.get("/aluno/:id", controlador.getById)

router.delete("/aluno/:id", controlador.delete)

router.patch("/aluno/:id", controlador.update)

module.exports = router