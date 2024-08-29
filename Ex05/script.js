/*
Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.
 */

let nomes = []

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome " + (i + 1) + ":")
    nomes.push(nome)
}

document.write(nomes.join(", ") + "<br><br>")  //exibe a lista na ordem certa
document.write(nomes.reverse().join(", "))    //exibe a lista na ordem inversa
