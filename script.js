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



