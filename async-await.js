// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

// import { resolve } from "path/posix"

//     promise.then(() => {console.log('Time out!')})
// };


const runTimeOut = async() =>{
    await setTimeout(() => console.log('Time out!'),2000)
    // .then(x => console.log('Time out!'))
    // .catch(err => console.log(err));
}

runTimeOut();
// runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();

const getCharacters = async() =>{
    await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => console.log(characters));
}

getCharacters();

