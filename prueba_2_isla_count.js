//creamos una funcion con un parametro, el cual va aser el estring para definr las islas
function islaCount (text) {
  //creamos tres variables, "read_text" el cual nos ayudará amapear el estring y a su vez tiene la funcionalidad de crear el array,count qu va a servir como contador para cada isla, e island, el cual será cada isla creada.
  let read_text = text.split('\n')
  let count = 0
  let island = read_text.map(i => i.split(''));
  //Validamos el contenido de island una ves que se aya ejecutado el metodo .map
  console.log(island);
  for (let i = 0; i <  island.length; i++) {
    //Recorremos el  valor de island para poder counstruir un array el cual será cada isla
    for (let j = 0; j < island[i].length; j++) {
      if (island[i][j] === '0' ) {
      //validamos el valor de "i" y de "j" que sea a igual a 0 
        if( i === 0 && j === 0 ) {
          if (island[i][j + 1] === '.' && island[i + 1][j] === '.') {
            count++;
          }
        } else if ((j===0 || island[i][j - 1] === '.') &&  (i=== 0 || island[i -1][j] === '.')) {
          count++;
        } 
      }
    }
  }
  return island;
}
islaCount('0...0\n..0..\n0...0');

//islaCount('0.000.\n..0...\n..0.0.\n..0...\n..000.')