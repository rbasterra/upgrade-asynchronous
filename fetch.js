
// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const data = async () =>{
    await fetch('https://api.agify.io?name=michael')
    .then(res => res.json())
    .then(res => console.log(res));
}

data();
// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <input type="text">
//     <button>Consultar</button>
// </body>
// </html>

// const baseUrl = 'https://api.nationalize.io';

// const search = async()=>{
//     const input$ = document.querySelector('input');
//     await fetch(baseUrl + `?name=${input$.value}`)
//     .then(res => res.json())
//     .then(res => console.log(res));
// }

// const myButton = document.querySelector('button');

// myButton.addEventListener('click',search);

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

// const baseUrl = 'https://api.nationalize.io';

// const search = async()=>{
//     const input$ = document.querySelector('input');
//     await fetch(baseUrl + `?name=${input$.value}`)
//     .then(res => res.json())
//     .then(res =>{
//         for (country of res.country){
//             const p =document.createElement('p');
//             p.innerText= `El nombre ${res.name} tiene un ${country.probability} de ser de ${country.country_id}`;
//             document.body.appendChild(p);
//         }
//     });
// }

// const myButton = document.querySelector('button');

// myButton.addEventListener('click',search);

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io';

const search = async()=>{
    const input$ = document.querySelector('input');
    await fetch(baseUrl + `?name=${input$.value}`)
    .then(res => res.json())
    .then(res =>{
        for (country of res.country){
            const p =document.createElement('p');
            const delButton = document.createElement('button');
            delButton.innerText = `Delete ${res.name}`;
            delButton.addEventListener('click', ()=> {
                p.remove();
                delButton.remove()});

            p.innerText= `El nombre ${res.name} tiene un ${country.probability} de ser de ${country.country_id}`;
            document.body.appendChild(p);
            document.body.appendChild(delButton);
        }
    });
}

const myButton = document.querySelector('button');

myButton.addEventListener('click',search);