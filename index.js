const express = require('express')
const petshop = require('./petshop')
const app = express()

app.use(express.json())

app.get('/petshop', (req, res)=>{
    return res.send(petshop.listarPets2());
})

app.post('/addpets', (req, res) => {
    const novoPet = req.body

    petshop.adicionarPet(novoPet)

    return res.json(novoPet)
})

app.get('/pets/:nome', (req, res) => {
    const  { nome } = req.params

    return res.send(petshop.buscarPet(nome))

})

app.listen(3000, () => console.log())



