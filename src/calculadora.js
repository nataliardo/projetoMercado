// Importação // Referência a Bibliotecas

// Classe(Opcional)

// Funções (dá retornos) ou Métodos (não dão retorno) 

// var: variável
// let: variável aperfeiçoada 
// const: constante

// Notações:
// camelCase
// snake_case

                                                //5     7
let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
                      // 5   +   7
    const resultado  = num1 + num2;
            // 12
    return resultado;
} 

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    const resultado = num1 - num2;
    return resultado;
}

//forma resumida/basica/simplificada de uma function: 
const multiplicarDoisNumeros = (num1, num2) => {
    return num1 * num2;
}

//forma mais resumida/basica/simplificada de uma function: 
const dividirDoisNumeros = (num1, num2) => num1 / num2;


module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};


