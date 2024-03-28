// fetch('https://icanhazdadjoke.com/',
// {headers: {'Accept': 'application/json', 'User-Agent': 'yrgo-kprog-class'}})
// .then(resp => resp.json())
// .then(json => console.log(json.joke))



// async function updateFortune() {
//     let resp = await fetch('/api/fortune')
//     let json = await resp.json()
//     let fortune = document.getElementById('fortune')
//     fortune.innerText = json.fortune
//     fortune.style.visibility = 'visible';
// }


async function printjoke(){
    let resp = await fetch('https://icanhazdadjoke.com/', {
        headers: {'Accept': 'application/json', 'User-Agent': 'yrgo-kprog-class'}
    })
    let json = await resp.json()
    let joke = document.getElementById('joke')
    joke.innerText = json.joke
    joke.style.visibility = 'visible';
}

console.log(printjoke())