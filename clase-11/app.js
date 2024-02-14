const estatusPedido = () => {
    // const estatus = Math.random() < 0.8;
    return Math.random() < 0.8;
}

// for(let i = 0; i < 10; i++){
//     console.log(estatusPedido())
// }

const miPedidoDePizza = new Promise((resolve, rejected) => {
    setTimeout(() =>{
        if(estatusPedido() ){
            resolve("Pedido exitoso")
        }else{
            rejected("Ocurrio un error...")
        }
    }, 3000)
})

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion)
// }

// const rechazarPedido = (mensadeDeError) => {
//     console.log(mensadeDeError)
// }

// miPedidoDePizza.then(manejarPedido, rechazarPedido)

miPedidoDePizza
    .then((mensajeDeConfirmacion) =>{
        console.log(mensajeDeConfirmacion)
    })
    .then(null, (mensadeDeError) => {
        console.log(mensadeDeError)
    })