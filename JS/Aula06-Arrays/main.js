// var numeros = [54, 111, 58, 853, 17, 75, 30]
// // array unidimensional
// console.log(numeros) 

// var matriz = [
//     ["Icarly", 2011, 10],
//     ["Os feiticeiros", 2009, 10],
//     ["Doug", 1999, 8.7],
// ]
// console.log(matriz),
// console.log(matriz[1],[2]),
// console.log(matriz[2],[1]),

// console.log("Antes: " + matriz)
// matriz[2][1] = 1800
// console.log("Depois: " + matriz)

// console.clear()

var numArray = [2, 3, 4, 5, 6]

console.log(numArray)

// // let  testJoin = numArray.join(".")
// // console.log(testeJoin) 

// console.log(numArray.length)
let retiraUltimoElemento = numArray.pop()
console.log(retiraUltimoElemento)
console.log(numArray)
let novaInformacao = numArray.push("melão")
console.log(numArray)
console.log(novaInformacao) 

let retiraInicio = numArray.shift()
console.log(numArray)
console.log(retiraInicio)

// UNSHIFT - Para adicionar um valor no inicio
let insereInicio = numArray.unshift("Pipoca")
console.log(numArray)
console.log(insereInicio)