let pokemonRepository = (function () {
    let repository = [
      {
          name: "charmander", 
          height: 0.6, 
          weight: 8.5, 
          type: "fire" , 
          abilities: ["blaze", "solar-power"]
      },
      {
          name: "charmeleon", 
          height: 1.1, 
          weight: 19, 
          type: "fire", 
          abilities: ["blaze", "solar-power"]
      },
      {
          name: "charizard", 
          height: 1.7, 
          weight: 90.5, 
          type: ["fire", "flying"], 
          abilities: ["blaze", "solar-power"]
      },
      {
          name: "pidgey", 
          height: 0.3, 
          weight: 1.8, 
          type: ["flying", "normal"], 
          abilities: ["keen-eye", "tangled-feet", "big-pecks"]
      },
      {
          name: "pidgeotto", 
          height: 1.1, 
          weight: 30, 
          type: ["flying", "normal"], 
          abilities: ["keen-eye", "tangled-feet", "big-pecks"]
      },
      {
          name: "pidgeot", 
          height: 1.5, 
          weight: 39.5, 
          type: ["flying", "normal"], 
          abilities: ["keen-eye", "tangled-feet", "big-pecks"]
      }
  ];
  
  function add (pokemon){
      if(
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "weight" in pokemon &&
          "type" in pokemon &&
          "abilities" in pokemon
      ){
  repository.push(pokemon);
      }
  }
  
    function getAll(){
      return repository;
    }
    
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    }
    
    return{
      add: add,
        getAll: getAll,
        addListItem: addListItem
    };
  })();
  
  pokemonRepository.add ({name: "Arcanine", height: 1.9, weight: 155, type:"fire", abilities:["flashFire", "intimidate", "justified"]});
  
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
        
    