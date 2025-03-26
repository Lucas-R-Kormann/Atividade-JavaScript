let N1 = parseInt(prompt('Digite o primeiro número'))
let N2 = parseInt(prompt('Digite o segundo número'))
let N3 = parseInt(prompt('Digite o terceiro número'))

let soma = N1 + N2 + N3

let media = soma/3

let aprovado = ("Aprovado com a nota: " + media)
let reprovado = ("Reprovado com a nota: " + media)

if (media >= 7) {
    console.log(aprovado)
} else {
    console.log(reprovado)
}