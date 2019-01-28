
//Creamos unafuncion con dos parametros, el cual será el array y el numero que determine las palabras mas largas. 
function consecutiveStrings(data, num) {
  // declaramos dos variables, nuestro resultado "result" y  n el cual nos dará la funcionalidad de validar el array de Strings
    let result = ""
    let n = data.length;

    //validar el valor de data
    console.log(n);

    // validamos el tamaño del array, si el "num" es mayor al tamao del array, y viceversa, si "num" es menor o igual a 0, para regresar result vacio ""
    if (n === 0 || num > n || num <= 0) {
      return result; 
    }

    // si no se cumple la condicion anterior, declaramos dos variables, "max" que nos va a ayudar a validar el tamao de un elemento dentro del array;
    // y "max_word" que el cual será el que determine una plabra larga
    else {
      let max = 0; 
      let max_word = "";
      //recorremos el array "data" 
      for (let i = 0; i < data.length; i++) {
        //validamos si el elemento del array "i" es mayor a max
        if (data[i].length > max ) {
          max = data[i].length;
          max_word = data[i];
          //si el valor de "i" es igual a el tamao de "data" -1
          if (i === data.length -1 ) {
            //validamos el valor que se le asigno a "max_word"
            console.log(max_word)
            //regresamos "max_word" 
            return max_word;
          }
        }
        // recorremos el valor de "i" para poder counstruir el estring mas largo, dado el parametro de la funcion "num", concatenando el valor de data
        for (let j = i + 1; j <= num; j++) {
          result = max_word.concat(data[j]);
        }
      }
    }
    //regresamos el string de result
  return result; 
}

consecutiveStrings(["julio","alonso","cesar","diaz"], 1);
//consecutiveStrings(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) 
