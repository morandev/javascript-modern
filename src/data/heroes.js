
//if we can use this array of heroes inside another js file
//we need to add the export key word like this export const heroes

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['Marvel', 'DC'];
/**
 * 
 * we can do defaults exports
 * and we can do multiple exports
 * 
 */
export {
    heroes as default,
    owners,
}