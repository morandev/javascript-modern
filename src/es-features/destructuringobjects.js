// destructuring an literal object
// the object
const user = {
    nme: "moran",
    lastname: "dev",
    age: "noage"
}

// the name of the variables have to be the same as the properties
// the destructuring
const { nme, age, lastname } = user;

console.log("we destructure", nme);
console.log("we destructure", age);
console.log("we destructure", lastname);

// we can destructure actual objects parameters like this
// and remember the name of the destructuring variables have to be the same as the properties
const getUser = ({ nme, age }) => console.log(nme, age);
// using destructuring allow us to set default values for undefined o null properties like this
// the range properties is undefined, we set the default value Senior this and it works
const getNewUser = ({ nme, age, range = "Senior" }) => console.log(nme, age, range);

getUser(user);
getNewUser(user);

// we can destructure an object wich is inside another object
// for example we use the name useContext, but it has no relation to React
const usContext = ({ nme, range = "Senior" }) => {
    return {
        nombre: nme,
        rango: {
            range
        }
    }
}

// we want the range, next we need to destructure as follows
const { rango: { range } } = usContext(user);

console.log("we destructure", range);
