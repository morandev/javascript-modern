
//bad practice of create a function
// function greeting( name ) {
//     return `Hi ${name}`
// }

const greeting = function( name ) {
    return `Hi ${name}`
}

// transform to an arrow function
// it has many advantages
const greetingArrow = nm => `Hi ${nm}`;

// to return an literal object using arrow
// if we don't use the parentheses javascript would think that it is about the body of the function
const getUser = () => ( { id:1, username:"Morandev"} )

console.log( greeting("morandev") );
console.log( greetingArrow("morandev") );
console.log( "getUser" , getUser() );
