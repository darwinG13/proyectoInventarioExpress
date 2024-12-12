const express = require ("express")
const router = express.Router()
const holaController = require("../controllers/helloControllers")

router.get ("/test",holaController.holaMundo)
module.exports = router