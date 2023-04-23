const express = require("express")
const promptController = require("../controllers/prompt-controller")

//Avore de rotas
const routes = express.Router()

routes.post("api/prompt", promptController.sendText)

module.exports = routes