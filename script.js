class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const carro = new Carro('Nissan', 'Versa', '2022');

console.log(carro.modelo)

