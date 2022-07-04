'use strict'
/**
 * Programa que pida dos numeros y que nos dia cual es el mayor, el menor y si son iguales. Y si no son número los vuelve a pedir hasta que sea correctos
 */

var numero1 = parseInt(prompt('Intorduce el número 1',0));
var numero2 = parseInt(prompt('Intorduce el número 2',0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    var numero1 = parseInt(prompt('Intorduce el número 1',0));
    var numero2 = parseInt(prompt('Intorduce el número 2',0));
}

if (numero1>numero2) {
    alert('El numero mayor es '+numero1);
}else if (numero2>numero1) {
    alert('El numero mayor es '+numero2);
}else if (numero2 == numero1) {
    alert('Los números son iguales');
}else{
    alert('Ingrese correctamente los números');
}
