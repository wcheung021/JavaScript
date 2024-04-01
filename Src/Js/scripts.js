let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    function fetchData(){
      fetch (apiUrl)
        .then(response =>{
          if (!response.ok){
            throw new Error("Error 404");
          }
          return response.jspn();
        })
        .then(data =>{
          console.log(data);
        })
        .catch(error =>{
          console.error("Error 404", error);
        });
    }

    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
      )
        pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      listpokemon.classList.add("listpokemon-item");
      let button = document.createElement("button");
      button.classList.add("button-item");
      button.innerText = pokemon.name.toUpperCase();
      button.classList.add("btn", "btn-primary", "btn-block", "btn-lg", "mb-3");
      button.setAttribute("data-target", "#exampleModal");
      button.setAttribute("data-toggle", "modal");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function (event) {
        showDetails(pokemon);
      });
    }
  
    function loadList() {
      return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
            console.log(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    }
  
    function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
      return fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (details) {
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.name = details.name;
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
          pokemon.weight = details.weight;
          pokemon.type = details.types.map((type) => type.type.name).join(", ");
          pokemon.abilities = details.abilities
            .map((ability) => ability.ability.name)
            .join(", ");
        })
        .catch(function (e) {
          console.log(e);
        });
    }
  
    let modal = document.querySelector(".modal");
  
    function showModal(pokemon) {
      let modalBody = document.querySelector(".modal-body");
      let modalTitle = document.querySelector(".modal-title");
  
      modalTitle.innerHTML = pokemon.name;
      modalBody.innerHTML = "";
  
      let nameElement = document.createElement("h5");
  
      let imageElement = document.createElement("img");
      imageElement.classList.add("modal-img");
      imageElement.src = pokemon.imageUrl;
  
      let heightElement = document.createElement("p");
      heightElement.innerText = "Height: " + pokemon.height;
  
      let weightElement = document.createElement("p");
      weightElement.innerHTML = "Weight: " + pokemon.weight;
  
      let typeElement = document.createElement("p");
      typeElement.innerHTML = "Type: " + pokemon.type;
  
      let abilitiesElement = document.createElement("p");
      abilitiesElement.innerHTML = "Abilities: " + pokemon.abilities;
  
      modalTitle.appendChild(nameElement);
      modalBody.appendChild(imageElement);
      modalBody.appendChild(heightElement);
      modalBody.appendChild(weightElement);
      modalBody.appendChild(typeElement);
      modalBody.appendChild(abilitiesElement);
    }
  
    document.querySelector(".btn-primary").addEventListener("click", function () {
      let modal = document.querySelector("#exampleModal");
      modal.classList.add("show");
      modal.style.display = "block";
    });
  
    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
    }
  
    function hideModal() {
      let modal = document.querySelector("#exampleModal");
      modal.classList.remove("is-visible");
    }
  
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-visible")) {
        hideModal();
      }
    });
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showModal: showModal,
      loadList: loadList,
    };
  })();
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  })();