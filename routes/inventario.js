const express = require("express");
const{eliminarHerramientaPorId, modificarHerramientaPorId, obtenerInventario, crearHerramienta, obtenerHerramientaPorId} = require("../controllers/inventario");
// const routers = require("./helloRoutes");
const router = express.Router()

router.get("/",obtenerInventario)
router.get("/:id", obtenerHerramientaPorId)
router.post("/", crearHerramienta)
router.put("/:id", modificarHerramientaPorId)
router.delete("/:id",eliminarHerramientaPorId)

module.exports = router