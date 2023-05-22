const express = require("express")
const router = express.Router()

const app = express()
const porta = 4444

const mulheres = [
    {
        nome: 'Cintia Brito',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Legal'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)