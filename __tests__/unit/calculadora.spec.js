//Bibliotecas
// Apontamento para o arquivo de desenvolvimento que vamos testar
const calculadora  = require("../../src/calculadora");

// Funções de teste de unidade
test("Somar 5 + 7", () => {
    // 1 - Configura
    // 1.1 Dados de Entrada
    const num1 = 5;
    const num2 = 7;

    // 1.2 Resultado Esperado
    const resultadoEsperado = 12;

    // 1.3 - Configura a função que será testada
    // Criando um objeto para receber a função da calculadora
    const somarDoisNumeros = calculadora.somarDoisNumeros;

    // Executando a função somar dois números e guardando o resultado
    const resultadoAtual = somarDoisNumeros(num1, num2);

    // 3 - Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test("Subtrair 15 - 7", () => {
    // 1 - Configura / Arrange
    // Entradas
    const num1 = 15;
    const num2 = 7;
    // Saidas
    resultadoEsperado = 8;

    // 2 - Executa / Act
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros
    const resultadoAtual = subtrairDoisNumeros(num1, num2);

    // 3 - Valida / Assert
    expect(resultadoAtual).toBe(resultadoEsperado)

})
test("Multiplicar 3 * 7", () => {
    // Configura
    const num1 = 3;
    const num2 = 7;
    const resultadoEsperado = 21;

    // Executa
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros
    const resultadoAtual = multiplicarDoisNumeros(num1, num2);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)


})

test("Dividir 27 / 9", () => {
    // Configura
    const num1 = 27;
    const num2 = 9;
    const resultadoEsperado = 3;

    // Executa
    const dividirDoisNumeros = calculadora.dividirDoisNumeros
    const resultadoAtual = dividirDoisNumeros(num1, num2);
    
    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)

})