const jvt = require('jsonwebtoken')
const userLogado = require('../utils/userLogado')
module.exports = async (req, res, next) => {
    try {
        let token = req.headers['x-access-token']
        if (token == null) {
            return res.status(400).send("Voce precisa estar logado para executar esta operacao")
        }
        let decoded = await jvt.verify(token, '123')
        userLocado = decoded.id
        next()
    } catch (erro) {
        return res.status(400).send(erro)
    }
}