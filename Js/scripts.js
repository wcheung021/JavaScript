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

//unction printArrayDetails(){
//  for (let i=0; i<pokemonList.length; i++){ 
//  if (pokemonList[i].heights === 1.1 ){ 
//      document.write("<p>", pokemonList[i].name + " (height: " + pokemonList[i].heights + ' )' + " is a normal pokemon. ", "</p>");
//  }else if (pokemonList[i].heights < 1.0) {
//      document.write("<p>", pokemonList[i].name + " (height: " + pokemonList[i].heights + ' )' + " is a small pokemon. ", "</p>");
//  }else{
//      document.write("<p>", pokemonList[i].name + " (height: " + pokemonList[i].heights + ' )' + " WOW, that's big! ", "</p>");
//  }
//  }


//printArrayDetails();
//printArrayDetails();



function add (pokemon){
    pokemonList.push(pokemon);
}

function getAll(){
    return pokemonList;
}

return{
    add: add,
    getAll: getAll

};
})();


pokemonRepository.add ({name: "Arcanine", heights: 1.9, weight: 155, type:"fire", abilities:["flashFire", "intimidate", "justified"]});
document.write(pokemonRepository.getAll());

pokemonRespository.getAll().forEach (function(pokemon){
    if (pokemon.heights === 1.1 ){ 
        document.write("<p>", pokemon.name + " (height: " + pokemon.heights + ' )' + " is a normal pokemon. ", "</p>");
    }else if (pokemon.heights < 1.0){
        document.write("<p>", pokemon.name + " (height: " + pokemon.heights + ' )' + " is a small pokemon. ", "</p>"); 
    }else{
        document.write("<p>", pokemon.name + " (height: " + pokemon.heights + ' )' + " WOW, that's big! ", "</p>");
    }
    });