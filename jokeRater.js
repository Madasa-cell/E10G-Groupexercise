fetch('https://icanhazdadjoke.com/',
    { headers: { 'Accept': 'application/json', 'User-Agent': 'yrgo-kprog-class' } })
    .then(resp => resp.json())
    .then(json => console.log(json.joke))