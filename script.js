const pokemonNameInput = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImageDisplay");
const pokemonHeight = document.getElementById("pokemonHeight");
const weightHeight = document.getElementById("weightHeight");
const button = document.getElementById("btn");

const barsContainer = document.getElementById("barsContainer");

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

let img = "";
let height = 0;
let weight = 0;

// functions
async function getApi(pokemonName) {
  try {
    let response = await fetch(`${baseUrl}${pokemonName.toLowerCase()}`);

    if (!response.ok) {
      throw new Error("Error");
    }

    let data = await response.json();

    img = data["sprites"]["front_default"];
    height = data["height"];
    weight = data["weight"];

    pokemonHeight.innerText = `Height: ${height}`;
    weightHeight.innerText = `Weight: ${weight}`;
    pokemonImage.src = img;
    pokemonImage.alt = pokemonName;

    pokemonNameInput.value = "";

  }
  catch(error) {
    console.log(error);
  }
}


button.addEventListener("click", () => {
  getApi(pokemonNameInput.value);
})

// start with a pokemon already
getApi("pikachu");

// bars

let barsQuantity = Math.floor(document.documentElement.clientWidth / 200) * 2;

function createBars(quantity) {
  for (let i = 0; i < quantity; i++) {
    let div = document.createElement("div");
    div.classList.add("bar");

    barsContainer.appendChild(div)
  }
}

createBars(barsQuantity);