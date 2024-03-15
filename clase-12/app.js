function ordenarProducto(producto){
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freecodecamp`);
    setTimeout(() => {
      if(producto === "taza"){
        resolve("Ordenando una taza con el logo de freecodecamp..");
      } else{
        reject("Este producto no esta disponible actualmente");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise(resolve => {
    console.log("procesano REspuesta");
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por su compra, Disfruta tu producto de freecodecamp");
    }, 4000)
  })
}

// ordenarProducto("taza")
//   .then(respuesta => {
//     console.log("Respuesta Recibida");
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   })
//   .then(respuestaProcesada => {
//     console.log(respuestaProcesada);
//   })
//   .catch(error => {
//     console.log(error);
//   })

async function realizarPedido(producto){
  try{
    const respuesta = await ordenarProducto(producto);
    console.log(respuesta);
    console.log("respuesta recibida");
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  }
  catch(error){
    console.log(error);
  }
}

realizarPedido("taza")