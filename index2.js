const express = require('express')
const app = express()
const router = require('./routes')
const pool = require('./utils/conexaobd')
app.use(express.json())
app.use(router)

app.get('/conexao',(req,res) => {
    pool.connect((err, client) => {
        if(err){
            return res.send(`Erro: ${err.message}`)
        }
        res.send('conectado')
    })
})

app.listen(3000, () => { console.log('servidor em execução')})