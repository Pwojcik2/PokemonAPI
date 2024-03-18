const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
const url = "https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById("card")
const btn = document.getElementById("btn")

let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    // console.log(id)

    const finalUrl = url + id; 
    
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data)
        })
}

let generateCard = (data) => {
    const hp = data.stats[0].base_stat
    const imgSrc = data.sprites.other.dream_world.front_default
    const pokeName = data.name
    const statAttack = data.stats[1].base_stat
    const statDefense = data.stats[2].base_stat
    const statSpeed = data.stats[5].base_stat

    card.innerHTML = `
        <p class="hp">
            <span>HP</span>
            ${hp}
            </p>
            <img src=${imgSrc} />
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">

            </div>
            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statDefense}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                </div>
            </div>
    `
    appendTypes(data.types)
}

let appendTypes = (types) => {
    types.forEach(item => {
        let span = document.createElement("SPAN")
        span.textContent = item.type.name
        document.querySelector(".types").appendChild(span)
    })
}

btn.addEventListener("click", getPokeData)
window.addEventListener("load", getPokeData)