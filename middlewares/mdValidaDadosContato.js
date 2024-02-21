module.exports = (req, res, next) => {
    if(req.body.nome == ""){
        return res.status(400).send("Informe o nome")
    }
    if(req.body.email == ""){
        return res.status(400).send("Informe o email")
    }
    if(req.body.celular == ""){
        return res.status(400).send("Informe o celular")
    }
    next()
}