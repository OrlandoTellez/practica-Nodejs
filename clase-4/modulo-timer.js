/*
Aqui se aprende a usar el modulo setTimeout()

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

mostrarTema("node.js")

setTimeout(mostrarTema, 5000, "node-js")

function sumar(a, b){
    console.log(a + b)
}

setTimeout(sumar, 3000, 2, 3)*/


/*
Aqui usamos el seImmediate que ejecuta la funcioin despues de que todo el codigo sincrono se termine de ejecutar

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)

}
console.log("Antes")

setImmediate(mostrarTema, "node.js")

console.log("Despues")
*/

/*
Aqui estamos utilizando el modulo setInterval que repite el codigo una cantidad infinita de veces hasta que detengamos el programa

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)

}

setInterval(mostrarTema, 10, "node.js")


function sumar(a, b){
    console.log(a + b);
}

setInterval(sumar, 1500, 10, 5);
*/


