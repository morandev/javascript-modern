
// in python are called dictionaries
// this work with key: value
const persona = {
    domain: "https://www.github.com/",
    username: "morandev",
    //we can anidate objects or functions
    repositories: {
        javascriptModern: "/javascript-modern",
    }
}

const personaNotCopy = persona
console.log( persona === personaNotCopy ); //true

// clone literal objects
// we arent copying the reference
// we can do it using the spread operator
const personaCopy = { ...persona }

console.log( persona === personaCopy ); //false

console.log( persona ) //if we log in this form, we cannot know the name of the object
console.log( { persona } ) //to see the name of the object
console.table( persona ) //
