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


for (let i=0; i<pokemonList.length; i++) 
if (pokemonList[i].heights === 1.1 ){
    document.write(pokemonList[i].name + "" + pokemonList[i].heights + ''+ "is a normal pokemon");
}else if (pokemonList[i].heights < 1.0) {
    document.write(pokemonList[i].name + "" + pokemonList[i].heights + ''+ "is a small pokemon");
}else{
    document.write(pokemonList[i].name + "" + pokemonList[i].heights + ''+ "WOW! it is a big pokemon");
}
    