function capitalizar(palavra) {
    if (!palavra) return ""; 
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
  }
  
  console.log(capitalizar("javascript")); 
  console.log(capitalizar("exemplo"));   
 

