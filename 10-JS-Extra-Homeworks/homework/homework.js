// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let contador = 0;
  const array = [];
  for (const key in objeto) {
    array[contador] = [key, objeto[key]]
    contador++;
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí  
  var respuesta = {};
  for (var i = 0; i < string.length; i++) {
    var key = string[i];
    if (string.indexOf(key, i + 1) == -1) {
      respuesta[key] = 0;
    }
  }
  for (const key in respuesta) {
    for (let i = 0; i < string.length; i++) {
      if (key === string[i]) {
        respuesta[key] = ++respuesta[key]
      }
    }
  }
  return respuesta;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string = '';
  for (let i = 0; i < s.length; i++) {
    let letra = s[i];
    if (letra === letra.toUpperCase()) {
      string += letra;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let letra = s[i];
    if (letra === letra.toLowerCase()) {
      string += letra;
    }
  }
  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //str = "The Henry Challenge is close!";
  frase = str.split(' ');
  nuevoString = '';
  nuevafrase = [];
  palabra = '';
  palabra2 = '';
  for (let i = 0; i < frase.length; i++) {
    palabra = frase[i];
    for (let p = (palabra.length - 1); p >= 0; p--) {
      palabra2 += palabra[p];
    }
    nuevafrase.push(palabra2);
    palabra2 = '';
  }
  for (let i = 0; i < nuevafrase.length; i++) {
    nuevoString += nuevafrase[i] + ' ';
  }
  nuevoString = nuevoString.trim();
  return nuevoString;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var unidadUno = numero.toString();
  var unidadDos = '';
  for (let i = (unidadUno.length - 1); i >= 0; i--) {
    unidadDos += unidadUno[i];
  }
  if (unidadUno === unidadDos) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = '';
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i]!== 'a'&& cadena[i] !== 'b' && cadena[i] !== 'c') {
      nuevaCadena += cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /** funciona pero no esta en el mismo orden
  var nuevoArray = [];
  var lastString = arr[0].length;
  var sumatoria = 0;
  var contador = 0;
  for (let i = 0; i < arr.length; i++) {
    sumatoria += arr[i].length;
    ++contador;
  }
  var promedio = sumatoria/contador;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < promedio) {
      nuevoArray.unshift(arr[i]);
    }else{
      nuevoArray.push(arr[i]);
    }
    lastString = arr[i].length;
  }
  return nuevoArray;
  */
  var nuevoArray = arr.sort((a,b) => {
    return (a.length - b.length);
  });
  return nuevoArray;


}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  /**No es union es intersección */
  //Escribe tu código aquí 
  var interseccion = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        interseccion.push(arreglo1[i])
      }
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

