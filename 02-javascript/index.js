'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does?
- How it's used? Add different use-case examples that covers every functionality.
- How it is called this design pattern or technique?

HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch

function requester(method, base, headers = { Accept: '*/*' }) {
  return (path = []) => fetch((base ? [base, ...path] : path).join('/'), { method, headers })
    .then(r => r.json());
}


requester('GET', 'https://api.github.com/users/mediastream')()
.then((res)=>{
	console.log(' ################################ Scenario 1 ################################ ')
	console.log(res)
})

requester('GET', 'https://api.github.com/users')(['mediastream'])
.then((res)=>{
	console.log(' ################################ Scenario 2 ################################')
	console.log(res)
})


requester('GET', 'https://api.github.com')(['users', 'mediastream'])
.then((res)=>{
	console.log(' ################################ Scenario 3 ################################')
	console.log(res)
})

requester('GET')(['https://api.github.com/users/mediastream'])
.then((res)=>{
	console.log(' ################################ Scenario 4 ################################ ')
	console.log(res)
})

requester('GET')(['https://api.github.com','users','mediastream'])
.then((res)=>{
	console.log(' ################################ Scenario 5 ################################ ')
	console.log(res)
})

console.log()
console.log(`
Descripcion de la funcion.
---
 - La funcion requester recibe 3 parametros de los cuales method es el unico oblicatorio
 - Esta funcion retorna una a su vez otra funcion (genera un helper) que hace una peticion http a un URL. 
 - El parametro base es opcional porque en la linea 20 se esta preguntando que sino existe se utilice el parametro path 
 - El parametro header tiene un defaultValue
 - La funcion que recibe el parametro path se conoce como arrowFunction
 - En la linea 20 se esta utilizando un operador de propagacion o spread operator
 - Se esta utilizando ES6


`);