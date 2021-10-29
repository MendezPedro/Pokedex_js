window.onload = () => {
    let endpoint = 'https://pokeapi.co/api/v2/pokemon/'
    //#let pokemon_type = getPokeTypesTo(pokemon)
    fetchPokemons();

    // $('#nexto').click((e) => {
    //     e.preventDefault();
    //     $('#pokemons').html('');
    //     fetchPokemons();
    // })

    document.getElementById('nexto').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('pokemons').innerHTML = '';
        fetchPokemons();
    })    




    /* forma con muchos fetch*/
    // function fetchPokemons(){
    //     fetch(endpoint)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(data){
    //         endpoint = data.next;
    //         data.results.forEach(function(pokemon){
    //             fetch(pokemon.url)
    //             .then(function(response){
    //                 return response.json();
    //             })
    //             .then(function(data){
    //                 let monster = `
    //                 <div class="card img-fluid col-4" >
    //                     <img src="${data.sprites.front_shiny}" class="card-img-top" alt="...">
    //                     <div class="card-body">
    //                         <h5 class="card-title">${data.name}</h5>
    //                         <p class="card-text">${data.status}</p>
    //                         <a href="#" id="${data.id}" class="btn btn-primary">Soon...</a>
    //                     </div>
    //                 </div>`
    //                 // $('#pokemons').append(monster);
    //                 document.querySelector('#pokemons').insertAdjacentHTML('beforeend', monster);
    //             })
    //         })
    //     })
    // };

    


    function fetchPokemons() {
        fetch(endpoint)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                endpoint = data.next;
                data.results.forEach(function(pokemon) {
                            let monster = `
                            <div class="card img-fluid col-4" >
                                <div class="container">
                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.url.split('/')[6]}.png" class="card-img-top" alt="...">
                                    <div class="card-body text-center">
                                        <h3 class="card-title">${pokemon.name}</h3>
                                        <a href="#" id="${pokemon.name}-${pokemon.url.split('/')[6]}" class="btn btn-dark">Quiero saber mas de este tipo</a>
                                    </div>
                                </div>
                            </div>`
                            // $('#pokemons').append(monster);
                            document.querySelector('#pokemons').insertAdjacentHTML('beforeend', monster);
                            document.querySelector(`#${pokemon.name}-${pokemon.url.split('/')[6]}`).addEventListener('click', (e) => {
                                e.preventDefault();
                                $('#diModal').modal('show');
                                document.querySelector('#pokemonName').innerHTML = pokemon.name;
                                document.querySelector('#pokeName').innerHTML = "Nombre: " + pokemon.name;
                                //fetch dentro del evento click
                                fetch(pokemon.url)
                                .then(function(response){
                                    return response.json();
                                })
                                .then(function(pokemonsito){
                                    document.querySelector('#abilities').innerHTML = getAbilities(pokemonsito)
                                    document.querySelector('#pokeTypes').innerHTML = getPokeTypes(pokemonsito)
                                    document.querySelector('#firstFiveMoves').innerHTML = getPokeMoves(pokemonsito)  
                                })
                            

                            })
                            document.querySelector(`#button-type`).addEventListener('click', (e) => {
                                e.preventDefault();
                                $('#diModal2').modal('show');
                                document.querySelector('#relationdamage').innerHTML = pokemon.name;
                                //console.log(pokemon.url)
                                //fetch dentro del evento click
                                fetch(pokemon.url)
                                
                                .then(function(response){
                                    return response.json();
                                })
                                // .then(function(pokemonsito){
                                //     document.querySelector('#pokeTypes').innerHTML = getPokeDamage(pokemon_type)
                                //     console.log(getPokeDamage(pokemon_type))
                                // })
                                

                            })
                        })
                })
    }

    function getAbilities(pokemon) {
        let abi = 'Abilities : '
        pokemon.abilities.forEach(function(ability){
            abi += ` ${ability.ability.name}`
        })
        return abi;
    }


    function getPokeTypes(pokemon) {
        let types = 'Types : '
        pokemon.types.forEach(function(type){
            types += ` ${type.type.name}`
        })
        return types;
    }

    function getPokeTypesTo(pokemon) {
        let types = 'Types : '
        pokemon.types.forEach(function(type){
            types += ` ${type.type.url}`
        })
        return types;
    }

    function getPokeMoves(pokemon) {
        let move = 'Moves : '
        pokemon.moves.forEach(function(movesito, index){
            if (index < 5) {
                move += ` ${movesito.move.name}`
            }
        })
        return move;
    }

    
    function getPokeDamage(pokemon_type) {
        let damage = 'damages : '
        pokemon.damages.forEach(function(damagesito){
                damage += ` ${damagesito.damage.name}`
        })
        return damage;
    }
}



/* <div id="pokeName"></div>
<div id="abilities"></div>
<div id="pokeTypes"></div>
<div id="generations"></div>
<div id="firstFiveMoves"></div> */
// window.onload = () => {


//     fetchPokemons();

//     function fetchPokemons(){
//         fetch('https://pokeapi.co/api/v2/pokemon/')
//         .then(function(response){
//             //console.log(response);
//             return response.json();
            
//         })
//         .then(function(data){
//             data.results.forEach(function(pokemon, index){
//                 console.log(pokemon);
//                 let monster = `
//                 <div class="card img-fluid col-4" >
//                     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${pokemon.name}</h5>
    
//                         <a href="#" id="${pokemon.id}" class="btn btn-primary">soon ...</a>
//                     </div>
//                 </div>`
//                 $('#pokemons').append(monster);
                
//             })
//         })

//     };

// }

