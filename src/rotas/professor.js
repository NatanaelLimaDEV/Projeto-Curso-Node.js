const express = require("express")
const controlador = require("../controladores/professor")

const router = express.Router()

router.post("/professor", controlador.create)

router.get("/professor", controlador.getAll)

router.get("/professor/:id", controlador.getById)

router.delete("/professor/:id", controlador.delete)

router.patch("/professor/:id", controlador.update)

module.exports = router