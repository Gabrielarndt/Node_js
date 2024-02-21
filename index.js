const express = require('express')
const app = express()
app.use(express.json())

const contatos = [
    {
        id: 1,
        nome: 'Maria',
        email: 'maria@gmail.com'
    },
    {
        id: 2,
        nome: 'jose',
        email: 'jose@gmail.com'
    }
]

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.get('/contatos', (req, res) => {
    res.send(contatos)
})

app.get('/contatos/:idcontato', (req, res) => {
    let listaContatos = contatos.filter(ct => ct.id == req.params.idcontato)
    res.send(listaContatos[0])
})

app.post('/contatos', (req, res) => {
    let contato = {
        id: contatos.length + 1,
        nome: req.body.nome,
        email: req.body.email
    }
    contatos.push(contato)
    res.send(contato)
})

app.put('/contatos/:idcontato', (req, res) => {
    let lista = contatos.filter(ct => ct.id == req.params.idcontato)
    if (lista.length > 0) {
        lista[0].nome = req.body.nome
        lista[0].email = req.body.email
        return res.send(lista[0])
    } else {
        res.send("Contato não existe")
    }
})

app.delete('/contatos/:idcontato', (req, res) => {
    for (i = 0; i < contatos.length; i++) {
        if (contatos[i].id == req.params.idcontato) {
            contatos.splice(i, 1)
            return res.send('Contato excluido com sucesso')
        } else {
            res.send('Contato não existe')
        }
    }
    res.send(listaContatos[0])
})

app.listen(3000, () => { console.log('servidor em execução') })

/**
 * get
 * post
 * put
 * delete
 */
