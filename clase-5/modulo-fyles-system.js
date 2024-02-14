const fs = require("fs");

//Aqui todo se trabaja de manera asincrona, pero hay posibildad de trabajar en manera sincrona agregando Sync al final del modulo, ejemplo: fs.renameSync() y al usarlo de esta manera las funciones de error no son necesarias

//Leer un archivo

console.log("antes de leer el archivo")
fs.readFile("index.html", "utf-8", (err, contenido) => {
    if(err){
        //console.log(err)
        throw err;
    }else{
        console.log(contenido);
    }
    console.log("Mensaje despues de la condicional") //Usando el throw err este console.log no se ejecutara
});
console.log("Despues de leer el archivo")


//Cambiar nombre de un archivo
console.log("antes de cambiar el nombre")
fs.rename("index.html", "main.html", (err)=>{
    if(err){
        throw err;
    }
    console.log("nombre cambiado exitosamente")
});
console.log("Despues de cambiar el nombre")


//Agrega contenido al final del archivp
console.log("antes de agregar contenido del archivo")
fs.appendFile("index.html", "<p>HOla</p>", (err) => {
    if(err){
        throw err;
    }
    console.log("Archivo actualizado")
});
console.log("Despues de agregar contenido del archivo")

//Reemplazar todo el contenido del archivo
console.log("antes de reemplazar contenido del archivo")
fs.writeFile("index.html", "contenido Nuevo", (err) => {
    if(err){
        throw err;
    }
    console.log("Contenido remplazado exitosamente")
});
console.log("Despues de reemplazar contenido del archivo")


//Eliminar archivos
console.log("antes de eliminar el archivo")

fs.unlink("main.html", (err) => {
    if(err){
        throw err;
    }
    console.log("Archivo eliminado")
});
console.log("Despues de eliminar el archivo");

