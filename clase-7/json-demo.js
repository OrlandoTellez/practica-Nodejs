/*
const curso = require("./curso.json")

console.log(curso.titulo)
console.log(curso.numVistas)
console.log(curso.numLikes)
console.log(curso.temas)
console.log(curso.esPublico)
*/

let infoCurso = {
    "titulo": "Aprende Node.js",
     "numLikes": 211123,
     "temas": [
         "Javascript",
         "Node.js"
     ],
     "esPublico": true
 }

 // Objeto -> cadena de caracteres
 let infoCursoJSON = JSON.stringify(infoCurso);
 console.log(infoCursoJSON)
 console.log(typeof infoCursoJSON)

// Cadena de caracteres -> objeto


let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)