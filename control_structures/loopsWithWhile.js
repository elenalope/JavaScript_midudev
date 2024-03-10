//Bucles con while

//Un bucle es una estructura de control que permite repetir un bloque de instrucciones. Vamos, repetir una tarea tantas veces como queramos.

//En JavaScript, existen varias formas de lograrlo, y una de ellas es el bucle con while. El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple una determinada condición.

//Sintaxis
//La sintaxis del bucle while es similar a la de un condicional if. La única diferencia es que, en lugar de ejecutar el código una sola vez, se ejecuta mientras se cumpla la condición.

while (condición) {
  // código a ejecutar mientras se cumpla la condición
}

//El bucle comienza evaluando la condición dentro de los paréntesis. Si la condición es true, se ejecuta el código dentro de las llaves.

//Después de ejecutar el código, la condición se evalúa de nuevo, y si sigue siendo verdadera, el código dentro de las llaves se ejecuta de nuevo. Este proceso se repite hasta que la condición se evalúa como falsa.

//Ten en cuenta que, si la condición es falsa desde el principio, el código dentro de las llaves nunca se ejecutará.

//A cada vuelta del bucle se le llama iteración. Una iteración es la repetición de un proceso o acción un número determinado de veces, de manera ordenada y sistemática.


//EJEMPLO DE USO DE WHILE
//Vamos a crear la cuenta atrás de un cohete. Creamos una variable cuentaAtras que contenga el número de segundos que faltan para el lanzamiento. En este caso, vamos a empezar con 10 segundos.

//let cuentaAtras = 10
//Para quitarle un segundo a la cuenta atrás, vamos a utilizar el operador de resta (-) y el operador de asignación (=).

let cuentaAtras = 10
cuentaAtras = cuentaAtras - 1
console.log(cuentaAtras) // -> 9
//Sabiendo esto y cómo funciona el bucle while, podemos crear la cuenta atrás del cohete.

// iniciamos la variable fuera del bucle
//let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')
//Si ejecutas este código en consola, deberías ver los números del 10 al 1, y después el mensaje de despegue.