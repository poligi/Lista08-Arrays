/*
Desenvolva um algoritmo que declare uma lista de 10 números e
solicite um número para o usuário e no final informe se o número
que o usuário digitou está dentro da lista ou não.
 */

const lista = [2, 7, 9, 25, 50, 4, 41, 21, 12, 18]
let x= parseInt(prompt('Digite um número de 0 a 50'))

if (lista.includes(x)) {
    alert('Seu número está dentro da lista!')
} else {
    alert('Seu número não pertence a lista!')
}