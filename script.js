function operacaoMatematica (numero1, numero2){

    const operacao1 = numero1 - numero2
    console.log("Operação 1: " + operacao1);

    const operacao2 = numero1 + numero2
    console.log("Operação 1: " + operacao2);

    const operacao3 = numero1 * numero2
    console.log("Operação 1: " + operacao3);

    const operacao4 = numero2!==0 ? numero1 / numero2: "Impossível dividir por 0"
    console.log("Operação 1: " + operacao4);

   
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"))
let numero2 = parseFloat(prompt("Digite o segundo número:"))

operacaoMatematica(numero1,numero2)







