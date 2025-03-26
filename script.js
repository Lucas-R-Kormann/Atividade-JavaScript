// Atividade 1

numero = prompt("Digite um número");

if(numero % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

// Atividade 2

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

// Atividade 3

let n1 = 10;
let delay = 0;

while(n1 >= 1) {
        console.log(n1);
        n1--
   

}

// Atividade 4

let original = "JavaScript";
let reversed = original.split('').reverse().join('');

console.log(reversed);

// Atividade 5

let str = "JavaScript";
let n = str.length;
console.log(n)

// Atividade 6

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const carro = new Carro('Nissan', 'Versa', '2022');

console.log(carro.modelo)

// Atividade 7 

let nome = prompt();

let mensagem = ('Olá ' + nome);

console.log(mensagem)

// Atividade 8

let N1 = parseInt(prompt('Digite o primeiro número'))
let N2 = parseInt(prompt('Digite o segundo número'))
let N3 = parseInt(prompt('Digite o terceiro número'))

let soma1 = N1 + N2 + N3

let media = soma1/3

let aprovado = ("Aprovado com a nota: " + media)
let reprovado = ("Reprovado com a nota: " + media)

if (media >= 7) {
    console.log(aprovado)
} else {
    console.log(reprovado)
}

// Atividade 9

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      console.log(`${i} - Múltiplo de 3`);
    } else {
      console.log(`${i} - Não múltiplo de 3`);
    }
  }

  // Atividade 10

  function palindrome(str) {
    return true;
}

console.log(palindrome("arara"))

// Atividade 11

let numero = prompt();

    if (numero > 0){
        console.log("O número é positivo")
    } else if(numero == 0){
        console.log("O número é 0")
    } else {
        console.log("O número é negativo")
    }

// Atividade 12

let Celsius = parseInt(prompt("Digite os graus em Celsius"));

let Farenheit = (Celsius * 9/5) + 32

console.log("A conversão de Celsius para Farenheit é: " + Farenheit);

// Atividade 13

let soma2 = 0;
let i = 1
while(i<= 100) {
    soma2 = soma2 + i;
    i++;
}

console.log("A soma é: " + soma2);

// Atividade 14

let azul = ("azul")
console.log("Substituir palavra Azul por Vermelho!")
let texto = prompt('Digite uma frase ou texto com a palavra azul:')
console.log(texto.replace(azul, "vermelho"));

// Atividade 15

function verificarTamanho(string) {
    if (string.length > 10) {
      console.log("A string tem mais de 10 caracteres.");
    } else {
      console.log("A string tem 10 caracteres ou menos.");
    }
  }
  
  verificarTamanho("Exemplo curto");  
  verificarTamanho("Curto");
  verificarTamanho('String Longa')    

// Atividade 16

  const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];

console.log(frutas[2]); 

// Atividade 17

function saudacao(nome, saudacao = "Bem-vindo(a)") {
    return `${saudacao}, ${nome}!`;
  }
  
  console.log(saudacao("João")); 
  console.log(saudacao("Maria")); 

// Atividade 18

let nota = parseInt(prompt('Insira sua nota'))

if(nota >= 6){
    console.log('Aprovado com a nota: ' + nota)
} else {
    console.log('Reprovado com a nota: ' + nota)}

// Atividade 19

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  // Atividade 20

  function contarVogais(palavra) {
    const vogais = "aeiouAEIOU"; 
    let contador = 0;
  
    for (let letra of palavra) {
      if (vogais.includes(letra)) {
        contador++;
      }
    }
    return contador;
  }
  console.log(contarVogais("programacao")); 
  console.log(contarVogais("Javascript")); 
  console.log(contarVogais("Vogal")); 

  // Atividade 21

  function somarArray(numeros) {
    let soma3 = 0;
  
    for (let numero of numeros) {
      soma3 += numero;
    }
  
    return soma3;
  }
  console.log(somarArray([1, 2, 3, 4, 5]));
  console.log(somarArray([10, 20, 30]));

  // Atividade 22

  let numero22 = parseInt(prompt('Insira um número e o sistema retornará o dobro deste valor')); // Declarei a variável desta forma para não ter conflito, o 22 é referente ao número da atividade

numeroDobrado = (numero22 * 2);

console.log(numeroDobrado);

// Atividade 23

let numero23 = 2;

while (numero23 <= 20) {
  console.log(numero23);
  numero += 2;
}

// Atividade 24

function capitalizar(palavra) {
    if (!palavra) return ""; 
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
  }
  
  console.log(capitalizar("javascript")); 
  console.log(capitalizar("exemplo"));   

  // Atividade 25

  function anoBissexto() {
    
    const ano = parseInt(prompt("Digite o ano para verificar se é bissexto:"));
  
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      console.log(`${ano} é um ano bissexto.`);
    } else {
      console.log(`${ano} não é um ano bissexto.`);
    }
  }
  anoBissexto();




 

