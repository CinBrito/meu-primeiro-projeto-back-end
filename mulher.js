const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Cintia',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQGE4NzfYWnj0Q/profile-displayphoto-shrink_800_800/0/1661453428473?e=1689811200&v=beta&t=XBAmjnE989FwR9PeKTccphZL_SrDwIBV7m0ivHRDm-s',
    minibio: 'Constante Aprendiz'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)