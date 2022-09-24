//import is a key word to us external modules such as array or libraries
//an useful snipper caller to use this key word is imp

import heroes, { owners } from "../data/heroes";


//the find array method returns the first element of the calling array that matchs the callback
//if there is no match, returns undefined
// the callback here says that hero id must be equal to the passed id argument
export const getHeroeById = id => {
    return heroes.find(h => h.id === id)
}

//the filter array method returns a new array thats contains all the elements that matched the callback
//this callback is called predicate too
//if there are not matchs, the returned array will be empty
export const getHeroesByOwner = ownr => {
    return heroes.filter(h => h.owner === ownr)
}

// find method
console.log('hero with id 1', getHeroeById(1));
console.log('hero with id 2', getHeroeById(2));
console.log('hero with id 3', getHeroeById(3));
console.log('hero with id 4', getHeroeById(4));
console.log('hero with id 5', getHeroeById(5));
// filter method
console.log('marvel heroes', getHeroesByOwner( owners[0] ));
console.log('DC heroes', getHeroesByOwner( owners[1] ));