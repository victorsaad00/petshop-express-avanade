const fs = require('fs')
const moment = require('moment')
let dbpetshop = fs.writeFileSync('./bd-petshop.json', 'utf-8')

dbpetshop = JSON.parse(dbpetshop)

const petshop = {

    atualizarBanco: (pet) => {
        let petsAtualizados = JSON.stringify(dbpetshop, null, 2)
        fs.writeFileSync('bd-petshop.json', petsAtualizados, 'utf-8')
    },

    listarPets: (pets) => {
        (pets).forEach((pet) => {
            let {nome, tipo, idade, raca} = pet
            console.log(`${nome} ${idade} ${tipo} ${raca}`)
        });
    },
    
     vacinarPet: (pet) => {
        if (!pet.vacinado) {
            pet.vacinado = true
            console.log(`${pet.nome} foi vacinado!`)
            return true
            
        } else {
            console.log(`${pet.nome} ja é vacinado!`)
            return false
        }
    },
    
    campanhaVacina: (pets) => {
        let petsVacinados = 0
        pets.map(function(pet){
            if (pet.vacinado) 
                petsVacinados++
        })
        return petsVacinados
    },

    adicionarPet: (novosPet) => {
        db.pets.push(...novosPet);
        atualizarBancoDeDados()
        novosPets.forEach((pet) => {
            console.log(`${pet.nome} foi adicionado com sucesso!`);
        })
    },
    
    darBanhoPet: (pet) => {
        pet.servicos.push('Banho' + moment().format())
        console.log(`${pet.nome} está de banho tomado!`)
    },
    
    tosarPet: (pet) => {
        pet.servicos.push('Tosa' + moment().format())
        console.log(`${pet.nome} está com cabelinho na régua`)
    },
    
    apararUnhasPet: (pet) => { 
        pet.servicos.push('corte de unhas' + moment().format())
        console.log(`${pet.nome} está de unhas aparadas!`)
    },

    atenderClientes: (pet, servico) =>{
        servico
        console.log(`Seja bem vindo(a), ${pet.tutor}, vamos cuidar do seu dogo!`)
        atualizarBancoDeDados()
    },

    buscarPet: (pets, nome) => {
        return pets.find((pet)=>{
            return pet.nome === String(nome)
        })
    },
    
    clientePremium: (pet) => {
        return (pet.servicos.length >=3) ? true : false
    },
}

module.exports = petshop