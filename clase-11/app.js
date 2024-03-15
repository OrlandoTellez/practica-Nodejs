// const estatusPedido = () => {
//     // const estatus = Math.random() < 0.8;
//     return Math.random() < 0.8;
// }

// // for(let i = 0; i < 10; i++){
// //     console.log(estatusPedido())
// // }

// const miPedidoDePizza = new Promise((resolve, rejected) => {
//     setTimeout(() =>{
//         if(estatusPedido() ){
//             resolve("Pedido exitoso")
//         }else{
//             rejected("Ocurrio un error...")
//         }
//     }, 3000)
// })

// // const manejarPedido = (mensajeDeConfirmacion) => {
// //     console.log(mensajeDeConfirmacion)
// // }

// // const rechazarPedido = (mensadeDeError) => {
// //     console.log(mensadeDeError)
// // }

// // miPedidoDePizza.then(manejarPedido, rechazarPedido)

// miPedidoDePizza
//     .then((mensajeDeConfirmacion) =>{
//         console.log(mensajeDeConfirmacion)
//     })
//     .then(null, (mensadeDeError) => {
//         console.log(mensadeDeError)
//     })

// const promesaCumplida = true;
// const numero = 1;

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(i < 10){
//             resolve("promesa cumplida");
            
//         }else{
//             reject("promesa rechazada");
//         }
       
//     }, 1000)
// }) 

// const manejarPromesaCumplida = (valor) => {
//     console.log(valor);
// }

// const manejarPromesaRechazada = (razonRechazo) => {
//     console.log(razonRechazo);
// }

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)


const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    return estatus;
}

// for(let i = 0; i < 10; i++){
//     console.log(estatusPedido())
// }

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()){
            resolve("Pedido exitoso");
        }else{
            reject("Ocurrio un error");
        }
    },3000)
})

const manejarPedido = (mesajeDeConfirmacion) => {
    console.log(mesajeDeConfirmacion);
}

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
}

// miPedidoDePizza.then(manejarPedido, rechazarPedido)

miPedidoDePizza
    .then((mesajeDeConfirmacion) => {
        console.log(mesajeDeConfirmacion)
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    })