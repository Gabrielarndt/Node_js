const express = require('express')
const router = express.Router()

const contatos = require('./contatos')
const locais = require('./locais')

router.get('/contatos', contatos.consultar)
router.post('/contatos', contatos.cadastrar)
router.put('/contatos/:idcontato', contatos.editar)
router.delete('/contatos/:idcontato', contatos.deletar)
router.get('/contatos/:idcontato', contatos.consultarById)

router.get('/lcoais/:idlocal', locais.consultarById)
router.get('/locais', locais.consultar)
router.put('/lcoais/:idlocal', locais.editar)
router.post('/locais', locais.cadastrar)
router.delete('/locais/:idlocal', locais.deletar)

module.exports = router