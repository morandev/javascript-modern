import { getHeroeById } from './es-features/defaultmultipleexports'

/**
 * 
 *  An async function is a function declared with the async keyword,
 * and the await keyword is permitted within it. 
 * 
 *  The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
 * avoiding the need to explicitly configure promise chains.
 * 
 * 
 */
const getHeroByIdAsync = async(id) => {
    return  `no hero got found by id: ${id}` && getHeroeById(id) 
}

getHeroByIdAsync(12)
    .then( console.log )
    .catch( console.warn )


// https://developers.giphy.com/
const api_key = 'it only work with your api key from giphy api'
const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=goku&limit=5`;

const renderGifs = async(url) => {

    let rsp = await fetch(url);
    rsp = await rsp.json();

    const data = rsp.data;
    const body = document.body;
    
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    
    data.forEach( g => {
        const { images:{ original:{ url }}} = g;
        
        const div = document.createElement('div');
        const img = document.createElement('img');
        
        img.setAttribute('src', url);
        
        div.appendChild(img);

        body.appendChild(div)
    })
}

renderGifs(url);
