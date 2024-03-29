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
      return fetch(url).then(function(response){
      return response.json();
      }).then(function(details){
      
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.name = details.name;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.type = details.type;
      pokemon.abilitie = details.abilitie;
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
        closeButtonElement.innerHTML = "close";
        closeButtonElement.addEventListener("click",hideModal);

        let titleElement = document.createElement("h1");
        titleElement.innerText =  pokemon.name;

        let contentElement = document.createElement("p");
        contentElement.innerText = "height: " + pokemon.height + " " + "weight: " + pokemon.weight;

        let imageElement = document.createElement("img");
        imageElement.src = pokemon.imageUrl;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
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