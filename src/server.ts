import * as http from "http"
import { app } from "./app"

// CRIA UM SERVIDOR DO NODE
const server = http.createServer(app)

// CONFIGURAÇÃO DA PORTA
const port = process.env.PORT

// EXECUTANDO O SERVIDOR - ESCUTANDO A PORTA
server.listen(port, () =>{
    console.log(`Servidor iniciado na porta ${port}`)
})