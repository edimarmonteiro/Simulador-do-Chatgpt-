const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const routes = require("./routes/routes")

const app = express();

app.use(express.json())
/*Não pacei nenhuma configuração para qualquer 
indereço que eu chamar poça acessar */
app.use(cors())
app.use(routes)

module.exports = app