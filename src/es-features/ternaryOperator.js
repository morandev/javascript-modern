//The conditional (ternary) operator is the only operator in JavaScript that has three operands.
//This operator is often used as a shortcut for the if statement.

const termo_vacio = true;

if( !termo_vacio ) {
    console.log('cebando mates');
} else {
    console.log('hay que cargar el termo');
}

!termo_vacio ? 
    console.log('cebando mates') : 
    console.log('hay que cargar el termo');

const toDo = (!termo_vacio && 'cebando mates') || 'hay que cargar el termo';

console.log(toDo);