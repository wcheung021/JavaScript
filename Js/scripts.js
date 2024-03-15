let pokemonRepository = (function (){

let pokemonList = [
    {
        name: "charmander", 
        heights: 0.6, 
        weight: 8.5, 
        type: "fire" , 
        abilities: ["blaze", "solar-power"]
    },
    {
        name: "charmeleon", 
        heights: 1.1, 
        weight: 19, 
        type: "fire", 
        abilities: ["blaze", "solar-power"]
    },
    {
        name: "charizard", 
        heights: 1.7, 
        weight: 90.5, 
        type: ["fire", "flying"], 
        abilities: ["blaze", "solar-power"]
    },
    {
        name: "pidgey", 
        heights: 0.3, 
        weight: 1.8, 
        type: ["flying", "normal"], 
        abilities: ["keen-eye", "tangled-feet", "big-pecks"]
    },
    {
        name: "pidgeotto", 
        heights: 1.1, 
        weight: 30, 
        type: ["flying", "normal"], 
        abilities: ["keen-eye", "tangled-feet", "big-pecks"]
    },
    {
        name: "pidgeot", 
        heights: 1.5, 
        weight: 39.5, 
        type: ["flying", "normal"], 
        abilities: ["keen-eye", "tangled-feet", "big-pecks"]
    }
];

function add (pokemon){
    pokemonList.push(pokemon);
}


function getAll(){
    return pokemonList;
}

function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let pokemonListItem = documentcreateElement("li");
    let pokemonButton = document.createElement ("button");
    pokemonButton.innerText = "pokemon.name";
    pokemonButton.classList.add("button-class");
    pokemonListItem.appendChild(button);
    pokemonList.appendChild(pokemonListItem); 
}

    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem
}})();

document.write(pokemonRepository.getAll());
pokemonRepository.add ({name: "Arcanine", heights: 1.9, weight: 155, type:"fire", abilities:["flashFire", "intimidate", "justified"]});

document.write(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});
    
