var form = document.getElementById('form');
var input = document.getElementById('search-pokemon');

var game = document.getElementById('game');

var element1 = document.getElementById('element1');
var elementList1 = document.getElementById('element-list1');
var elementList2 = document.getElementById('element-list2');
var element2 = document.getElementById('element2'); 

var pokemonImg = document.getElementById('img-poke');
var pokeName = document.getElementById('poke-name');

var randomButton = document.getElementById('random-poke');

var moveList = document.getElementById('move-list');
var move = document.getElementById('move');

//O async é pq a função tem que esperar um tempo para conseguir fazer a busca
const fetchPokemon = async (pokemon) => {
    pokeName.innerText = 'loading...';
    //O await está sendo usado aqui para fazer a função esperar até que seja encontrando o resultado desejado ou seja o pokemon
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 404) return 'error'


    //Agora para extrair o resultado tem que usar o json
    const data = await APIResponse.json();
    return data;
}

function errorStyle() {
    pokeName.innerText = 'undefined';
    game.title = '';
    pokemonImg.src = '../images/question-mark.png';
    pokemonImg.style.backgroundColor = 'transparent';
    elementList1.style.backgroundColor = 'var(--color4)'
    elementList2.style.backgroundColor = 'var(--color4)'
    element1.innerText = '--';
    element2.innerText = '--';
    move.style.display = 'none';
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    moveList.innerHTML = '';

    //Verificação de erro
    if (data === 'error') {
        errorStyle();
        return;
    }
    pokemonImg.style.backgroundColor = 'white';
    move.style.display = 'block';

    //Setando os valores pesquisados
    pokemonImg.src = data['sprites']['front_default'];
    pokemonImg.title = data['name'];
    pokeName.innerText = `${data['name']}-${data['id']}`;

    fetchAllGames(data['game_indices'].length, data);

    element1.innerText = data['types'][0]['type']['name'];
    paintElements(element1.innerText, elementList1);
    if (data['types'].length == 2) {
        element2.innerText = data['types'][1]['type']['name'];
        paintElements(element2.innerText, elementList2);
    } else {
        element2.innerText = '';
        elementList2.style.backgroundColor = 'transparent';
    }

    //Lista de movimentos
    getMoves(data);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let pokeName = input.value.toLowerCase();
    renderPokemon(pokeName);

    input.value = '';
});

function fetchAllGames(gameIndex, data) {
    game.title = '';
    for (let index = 0; index < gameIndex; index++) {
        if (index === gameIndex - 1)
            game.title += data['game_indices'][index]['version']['name'];
        else
            game.title += data['game_indices'][index]['version']['name'] + ', ';
    }
}

function getMoves(data) {
    const allMoves = data['moves'];
    moveList.innerText = '';

    for (let index = 0; index < allMoves.length; index++) {
        let span = document.createElement('span');
        span.innerText = `${index+1}. ${data['moves'][index]['move']['name']}`;
        span.setAttribute('translate', 'no');
        moveList.appendChild(span);
    }
}

async function fetchAllPokemons(){
    const APIPokedex = await fetch('https://pokeapi.co/api/v2/pokedex/1');

    return APIPokedex.json();
}

async function randomPokemons() {
    const data = await fetchAllPokemons();
    const allPokemons = data['pokemon_entries'].length;
    const randomResult = Math.floor(Math.random() * (allPokemons - 1 + 1) + 1);
    renderPokemon(randomResult);
}

randomButton.addEventListener('click', function(){
    randomPokemons();
});

renderPokemon(1);
