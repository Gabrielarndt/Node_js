const contatos = [
    {
        id: 1,
        nome: 'maria',
        email: "maria@gmail.com"
    },
    {
        id: 2,
        nome: 'josé',
        email: 'jose@gmail.com'
    }
]

const pool = require('./utils/conexaobd')

module.exports = {
    consultar(req, res) {
        pool.connect((err, client) => {
            if (err) {
                return res.send(`Erro: ${err.message}`)
            }
            client.query("select * from tb_contatos", (erro, result) => {
                if (erro) {
                    return res.send(`Erro: ${erro.message}`)
                }
                res.send(result.rows)
            })
        })

    },
    async consultarById(req, res) {

        // let listaContatos = contatos.filter(ct => ct.id == req.params.idcontato)
        // res.send(listaContatos[0])

        try {
            let client = await pool.connect()
            const idContato = req.params.idcontato
            const consulta = await client.query(`select * from tb_contatos where id = ${idContato}`)

            res.send(consulta.rows[0])
        }
        catch (erro) {
            res.send(`Erro: ${erro.message}`)
        }
    },
    async cadastrar(req, res) {
        // let contato = {
        //     id: contatos.length + 1,
        //     nome: req.body.nome,
        //     email: req.body.email
        // }
        // contatos.push(contato)
        // res.send(contato)
        let sql = 'insert into tb_contatos(nome,email)values($1,$2)'
        let dados = [req.body.nome, req.body.email]
        try {
            let client = await pool.connect()
            await client.query(sql, dados)
            res.send("Registrado com sucesso")
        } catch (erro) {
            res.send(`Erro: ${erro.message}`)
        }
    },
    async editar(req, res) {
        // let lista = contatos.filter(ct => ct.id == req.params.idcontato)
        // if (lista.length > 0) {
        //     lista[0].nome = req.body.nome
        //     lista[0].email = req.body.email
        //     return res.send(lista[0])
        // } else {
        //     res.send("Contato não existe")
        // }
        let sql = 'update tb_contatos set nome = $1, email = $2 where id = $3';
        let dados = [req.body.nome, req.body.email, req.body.id]; 
        try {
            let client = await pool.connect();
            await client.query(sql, dados);
            res.send("Registro atualizado com sucesso");
        } catch (erro) {
            res.send(`Erro: ${erro.message}`);
        }
    },
    async deletar(req, res) {
        // for (i = 0; i < contatos.length; i++) {
        //     if (contatos[i].id == req.params.idcontato) {
        //         contatos.splice(i, 1)
        //         return res.send('Contato excluido com sucesso')
        //     } else {
        //         res.send('Contato não existe')
        //     }
        // }
        try {
            let client = await pool.connect()
            const idContato = req.params.idcontato
            const consulta = await client.query(`delete from tb_contatos where id = ${idContato}`)
            res.send("Excluido com sucesso")
        } catch (erro) {
            res.send(`Erro: ${erro.message}`)
        }
    }
}