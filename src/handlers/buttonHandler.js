import dom from '../dom.js';
import createPokemon from '../components/createPokemon.js';
import getPokemon from '../../apis/getPokemon.js';
import createAbilities from '../components/createAbilities.js';
import data from '../data.js';

const buttonHandler = async () => {
    // get pokemon id
    const pokemonId = Number(dom.input.value);

    if (pokemonId === '' || pokemonId === 0) {
        return;
    }

    // check if the same pokemon
    if (pokemonId === data.id) {
        return;
    }

    const pokemonData = await getPokemon(pokemonId);

    // check if pokemon DOM exist
    const isContainerExist = document.getElementById('container');
    if (!isContainerExist) {
        // create pokemon DOM
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    } else {
        // update pokemon DOM
        const name = document.getElementById('name');
        name.innerText = pokemonData.species.name;
        const image = document.getElementById('img');
        image.src = pokemonData.sprites.front_default;
        const oldAbilities = document.getElementById('list');
        const newAbilities = createAbilities(pokemonData.abilities);
        oldAbilities.replaceWith(newAbilities);
    }

    data.id = pokemonId;
};

export default buttonHandler;
