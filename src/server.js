import express from 'express'
import { jogosRouter } from "./routes/jogo.route.js";

const server = express()

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
        status: 'funcionando'
    })
})

server.use('/Jogos', jogosRouter)

server.listen(3000, () => {
    console.log('http://localhost:3000')
})