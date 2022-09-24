// arrays
// we can define an array like this
let arr = new Array( 100 );

arr.push(1);

console.log( arr );

// preferably we use this
arr = []

arr.push(1)
arr.push(2)
arr.push(3)
arr.push(4)

console.log( arr );

// is a bad practice use the push method
// so we can:
// 1.initialize the array with values

arr = [1,2,3,4];

console.log( arr );

// 2. use the rest operator
let newarray = [ ...arr, 5 ];

console.log( newarray );

// map method
const theCallback = function double(num) {
    return num * 2;
}
// the map method create a new array wich values are the results of the callback executed in each of the elements
// of the calling array
newarray = newarray.map( theCallback );

console.log( newarray );

// the callback has 3 parameters
// 1 currentValue (of the calling array)
// 2 index (of the actual element in the calling array)
// 3 array (the calling array)

const anotherCallback = function ( currentValue, index, array ) {
    console.log( 'currentValue of the calling array ', currentValue );
    console.log( 'index of actual element', index );
    console.log( 'the calling array ', array );
}

newarray = newarray.map( anotherCallback );

console.log( newarray );
