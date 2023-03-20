const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListner('click', generateJoke)

async function generateJoke(){
    const response = await fetch('https://icanhazddjoke.com',{
        headers: {Accept: 'application/json'}
    })
    
}