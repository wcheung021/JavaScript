let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl= "https://pokeapi.co/api/v2/pokemon/?limit=150";
    let modalContainer = document.querySelector('#modal-container');
  
  function add (pokemon){
    if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "detailsUrl" in pokemon)
    pokemonList.push(pokemon);
    }
  
    function getAll(){
      return pokemonList;
    }
    
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function(event){
        showDetails(pokemon);
    });
}

    function loadList() {
        return fetch(apiUrl).then(function (response) {
        return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
            let pokemon = {
            name: item.name,
            detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
 

    function loadDetails(pokemon){
        let url = pokemon.detailsUrl;
        return fetch(apiUrl).then(function(response){
        return response.json();
    }).then(function(details){
        item.imageUrl = details.sprites.front_default;
        item.name = details.name;
        item.height = details.height;
    }).catch(function(e){
        console.log(e);
    });
    }

    function showDetails(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function(){
//Clear all existing modal content
          modalContainer.innerHTML = "";

          let modal = document.createElement("div");
          modal.classList.add("modal");
//Add the new modal content
          let closeButtonElement = document.createElement("button");
          closeButtonElement.classList.add("modal-close");
          closeButtonElement.innertext = "close";
          closeButtonElement.addEventListener("click",hideModal);

          let titleElement = document.createElement("h1");
          titleElement.innertext = item.name;

          let contentElement = document.createElement("p");
          contentElement.innerText = item.height;

          modal.appendChild(closeButtonElement);
          modal.appendChild(titleElement);
          modal.appendChild(contentElement);
          modalContainer.appendChild(modal);

          modalContainer.classList.add("is-visible");
        })
      }

      function hideModal(){
        let modalContainer = document.querySelector("#modal-container");
        modalContainer.classList.remove("is-visible");
      }

      window.addEventListener("keydown", (e) =>{
        let modalContainer=document.querySelector("#modal-container");
        if (e.key=== "Escape"&& 
        modalContainer.classList.contains("is-visible")){
          hideModal();
        }
      });

    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadDetails: loadDetails,
        showDetails: showDetails,
        loadList: loadList,
    };
})();
  
  
  pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
  })();
        
    