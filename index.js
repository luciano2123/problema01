console.log ('Hola Mundo')

const prompt = require('prompt-sync')()

const limpiarpantalla = require ('clear')

const Nombre = prompt ('Ingrsa tu nombre')

const edad = Number (prompt('Ingresar tu edad'))

limpiarpantalla()

console.log (edad)

console.log('Hola', Nombre , 'Que lindo que tengas' , edad, 'años')