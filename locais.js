const locais = [
    
]

module.exports = {
    consultar(req, res) {
        res.send(locais)
    },
    consultarById(req, res) {
        let listaLocais = locais.filter(lc => lc.id = req.params.idlocal)
        res.send(listaLocais[0])
    },
    cadastrar(req, res) {
        let local = {
            id: contatos.length + 1,
            nome: req.body.nome,
            rua: req.body.rua,
            bairro: req.body.bairro,
            fone: req.body.fone
        }
        locais.push(local)
        res.send(local)
    },
    editar(req, res) {
        let lista = locais.filter(ct => lc.id == req.params.idlocal)
        if (lista.length > 0) {
            lista[0].nome = req.body.nome
            lista[0].rua = req.body.rua
            lista[0].bairro = req.body.bairro
            lista[0].fone = req.body.fone
            return res.send(lista[0])
        } else {
            res.send("Local não existe")
        }
    },
    deletar(req, res){
        for(i = 0; i < locais.length; i++){
            if(locais[i].id == req.params.idlocal){
                locais.splice(i,1)
                return res.send('Local excluido com sucesso')
            }else{
                res.send('Local não existe')
            }
        }
        res.send(listaLocais[0])
    }
}