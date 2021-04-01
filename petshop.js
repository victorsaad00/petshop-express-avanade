const fs = require('fs')
const moment = require('moment')
let dbpetshop = fs.readFileSync('./db-petshop.json', 'utf-8')

dbpetshop = JSON.parse(dbpetshop)

const petshop = {

    atualizarBanco: () => {
        let petsAtualizados = JSON.stringify(dbpetshop, null, 2)
        fs.writeFileSync('db-petshop.json', petsAtualizados, 'utf-8')
    },

    listarPets: () => {
        dbpetshop.pets.forEach((pet) => {
            let {nome, tipo, idade, raca} = pet
            console.log(`${nome} ${idade} ${tipo} ${raca}`)
        });
        //return dbpetshop.pets
    },

    listarPets2: () => {
        let textoListaPets = "PETSHOP \n";

        dbpetshop.pets.forEach((pet) => {
            textoListaPets += (`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'} \n`);
            // pet.servicos.forEach((servico) => {
            //     textoListaPets += (`${servico.data} - ${servico.nome} \n`);
            // })
        })
        return textoListaPets;
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
        dbpetshop.pets.push(novosPet);
        petshop.atualizarBanco()
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

    buscarPet: (nome) => {
        let fPet = dbpetshop.pets.find((pet)=>{
            return pet.nome === nome
        })

        return fPet ? fPet : 'Nenhum Pet encontrado'
    },
    
    clientePremium: (pet) => {
        return (pet.servicos.length >=3) ? true : false
    },
}

module.exports = petshop