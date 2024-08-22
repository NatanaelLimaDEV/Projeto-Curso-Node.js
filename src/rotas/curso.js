const express = require("express")
const controlador = require("../controladores/curso")

const router = express.Router()

router.post("/curso", controlador.create)

router.get("/curso", controlador.getAll)

router.get("/curso/:id", controlador.getById)

router.delete("/curso/:id", controlador.delete)

router.patch("/curso/:id", controlador.update)

module.exports = router