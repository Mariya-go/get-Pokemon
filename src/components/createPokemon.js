import createAbilities from './createAbilities.js';

const createPokemon = (pokemonData) => {
    // container
    const container = document.createElement('div');
    container.className = 'container';
    container.id = 'container';

    // title
    const title = document.createElement('h2');
    title.innerText = pokemonData.species.name;
    title.id = 'name';

    // image
    const img = document.createElement('img');
    img.src = pokemonData.sprites.front_default;
    img.alt = pokemonData.species.name;
    img.id = 'img';

    //abilities
    const header = document.createElement('h3');
    header.innerHTML = 'Abilities';
    const list = createAbilities(pokemonData.abilities);
    container.append(title, img, header, list);
    return container;
};

export default createPokemon;
