// constantes y variables
// we should not use the var key word anymore
const username = "morandev";
let domain = "https://www.github.com/";

console.log(`Visit all my repos at: ${domain}${username}`);

// global scope variable
let country = "argentina";
console.log("country:", country);

if (true) {
    // country is a global scope variable
    // country = "Argentina" if we discomment this, the above line will throw a reference error
    // but already country is a if scope variable
    const country = "Uruguay"
    console.log("country:", country);
}

console.log("country:", country);



