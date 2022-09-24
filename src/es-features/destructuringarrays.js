// destructuring arrays
const characters = ['Goku', 'Vegeta', 'Homer', 'Trunks'];
const [ c1, c2,, c4 ] = characters

console.log("we destructure", c1);
console.log("we destructure", c2);
console.log("we destructure", c4);

const returnStrNum = () => ['ABC', 123];

let str, num;
[ str , num ] = returnStrNum();

console.log("we destructure", str);
console.log("we destructure", num);

const usState = value => [ value, (newVal) => value = newVal];

const [ nameh, setNameh ] = usState('Goku');

console.log("old Nameh", nameh);
console.log("we destructure: setNameh");
setNameh( "Vegeta" );
console.log("new Nameh", nameh);




