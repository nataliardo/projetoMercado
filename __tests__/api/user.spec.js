// Bibliotecas
const supertest = require("supertest"); //Framework de teste de API - toda library do supertest - funcao que sabe fazer testes de api
const assert = require("chai").assert; //Função de assertiva do resultado - apenas o assert da library chai

// Constantes, variaveis e objetos
const baseUrl = "https://petstore.swagger.io/v2"; // url base do API
let frase;
let token;

describe("PetStore Swagger - User", () => {
    const request = supertest(baseUrl);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; //erro do certificado

    it("Get User Login", () => {
        // Configura
        username = "natcompany";
        password = "123456";

        // Executa
        return request
               .get("/user/login?username=" + username + "&password=" + password)
               .then((response) => {
                    assert.equal(response.statusCode, 200);
                    assert.equal(response.body.code, 200);
                    assert.equal(response.body.type, "unknown");
                    messagem = response.body.message;
                    frase = messagem.substring(0,messagem.indexOf(":") +1);
                    console.log("a frase eh " + frase);
                    assert.equal(frase, "logged in user session:" );
                    token = messagem.substring(messagem.indexOf(":") + 1,);
                    console.log("O token eh " + token);

               }); // fim da request

    }); // fim do it


}); // fim da describe