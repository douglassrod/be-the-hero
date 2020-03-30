/**
 * Rota / Recurso
 */

 /**
  * Métodos http:
  * 
  *GET: Buscar/Listar uma informação do back-end
  *POST: Criar uma informação no back-end
  *PUT: Alterar uma informação no back-end
  *DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   * 
   */

const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app