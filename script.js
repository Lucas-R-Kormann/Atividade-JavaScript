function somarArray(numeros) {
    let soma = 0;
  
    for (let numero of numeros) {
      soma += numero;
    }
  
    return soma;
  }
  console.log(somarArray([1, 2, 3, 4, 5]));
  console.log(somarArray([10, 20, 30]));
  


