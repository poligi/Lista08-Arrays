/*
Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos.
 */

const numeros =  [15, 58, 34, 41, 2, 66, 74, 7, 23, 89, 53, 99, 25, 54, 6]
let soma = 0

for (let numero of numeros) {
    soma += numero
}

document.write(`Os números são ${numeros} <br>`)
document.write(`A soma dos números é ${soma}`)
