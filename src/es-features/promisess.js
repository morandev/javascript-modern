import { getHeroeById } from "./es-features/defaultmultipleexports";

// the sinchronous code will execute first or before the asynchronous code
// the promises are the last one

// a promise object has two arguments, the naming convention are respectively resolve and reject
// const getHero = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         const hero = getHeroeById(12);

//         if (hero) {
//             // resolve the success
//             resolve(hero);
//         } else {
//             // reject the failure
//             reject('No se obtuvo ningun heroe')
//         }
//     }, 2000);

// })

// getHero
//     .then( h => console.log('asynchronous hero: ', h ))
//     .catch( err => console.error( err ))

// console.log('last synchronous code');


const getHeroByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroeById(id);

            if (hero) {
                // resolve the success
                resolve(hero);
            } else {
                // reject the failure
                reject('No se obtuvo ningun heroe')
            }
        }, 2000);

    })
}

getHeroByIdAsync(2)
    .then( console.log )
    .catch( console.warn )

getHeroByIdAsync(12)
    .then( console.log, console.warn )