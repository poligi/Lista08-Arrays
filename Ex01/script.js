/*
 Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.
*/

const numeros = [15, 58, 34, 41, 2, 66, 74, 7, 23, 89, 53, 99, 25, 54, 6]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2===0) {
        console.log(`${numeros[i]}`)
    }
}