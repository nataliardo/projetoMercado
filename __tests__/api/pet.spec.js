// Bibliotecas
const supertest = require("supertest"); //Framework de teste de API - toda library do supertest - funcao que sabe fazer testes de api
const assert = require("chai").assert; //Função de assertiva do resultado - apenas o assert da library chai

// Constantes, variaveis e objetos
const baseUrl = "https://petstore.swagger.io/v2"; // url base do API
const petId = 179625524;                           // codigo do animal

// Descrição = Conjunto de testes ~ Classe
describe("PetStore Swagger - Pet", () => {
    const request = supertest(baseUrl);

    // Post - teste de incluir um animal
    it("Post Pet", () => {
        // Configura
        // Apontou para o arquivo com os dados do animal
        const jsonFile = require("../../vendors/json/pet1.json");
        // Realizar a requisição e receber a resposta

        // Executa
        return request      // chamada para a requisição
            .post("/pet")   // endpoint para incluir o animal
            .send(jsonFile) // envia os dados do animal no corpo da requisição
        // Valida
            .then((response) => {
                assert.equal(response.statusCode, 200); // Se a requisição foi recebida e processada
                assert.equal(response.body.id, petId); // Se é o id esperado do animal
                assert.equal(response.body.name, "Teresa"); // Se é o nome esperado do animal
                assert.equal(response.body.status, "available"); // Se está com o status esperado
            });
    });
    
});

