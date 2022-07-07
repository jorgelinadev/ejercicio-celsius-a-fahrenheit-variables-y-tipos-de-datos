//alert ('Mi archivo está bien linkeado');

//Celsius a Fahrenheit

//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado
//de la conversión a grados Fahrenheit.

const celsius = prompt ('Ingresar valor en grados Celsius a convertir');
const conversion = ( Number (celsius) * 9 / 5 + 32);
alert ( celsius + 'grados Celsius equivalen a: ' + conversion + ' grados Fahrenheit.');