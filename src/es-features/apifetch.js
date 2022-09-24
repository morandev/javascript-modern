// https://developers.giphy.com/
const api_key = 'it only work with your api key from giphy api'
const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=goku&limit=5`;

// the first argument is required and is the url, 
// the second argument is optional and is a configuration object called init
// returns a promise object that resolves to a response object to that request, whether or not it is correct.
// then we can chain multiple .then with one .catch 
fetch(url)
    .then(rps => rps.json())
    .then(({ data }) => {
        
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
    })