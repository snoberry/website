const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

jokeBtn.addEventListner('click', generateJoke)

async function generateJoke(){
    const response = await fetch('https://icanhazddjoke.com',{
        headers: {Accept: 'application/json'}
    })
    const data = await response.json()
    jokeEl.innerHTML = data.joke
}