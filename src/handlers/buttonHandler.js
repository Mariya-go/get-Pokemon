import dom from '../dom.js';
import createPokemon from '../components/createPokemon.js';
import getPokemon from '../../apis/getPokemon.js';
import createAbilities from '../components/createAbilities.js';
import data from '../data.js';
import createErrorMessage from '../components/createErrorMessage.js';

const buttonHandler = async () => {
    // get pokemon id
    const pokemonId = Number(dom.input.value);

    // check if pokemon DOM exist
    const isContainerExist = document.getElementById('container');

    // processing incorrect numbers
    if (pokemonId === '' || pokemonId < 1 || pokemonId > 1010) {
        const errorMessage = createErrorMessage();
        if (isContainerExist) {
            isContainerExist.remove();
        }

        dom.root.append(errorMessage);
        data.id = null;
        return;
    }

    // check if the same pokemon
    if (pokemonId === data.id) {
        return;
    }

    const pokemonData = await getPokemon(pokemonId);

    if (!isContainerExist) {
        // create pokemon DOM
        dom.root.innerHTML = '';
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    } else {
        // update pokemon DOM
        const name = isContainerExist.getElementById('name');
        name.innerText = pokemonData.species.name;
        const image = isContainerExist.getElementById('img');
        image.src = pokemonData.sprites.front_default;
        const oldAbilities = isContainerExist.getElementById('list');
        const newAbilities = createAbilities(pokemonData.abilities);
        oldAbilities.replaceWith(newAbilities);
    }

    data.id = pokemonId;
};

export default buttonHandler;
