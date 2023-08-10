const getPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            throw new Error(`Failed to get Pokemon with status: ${res.status}`);
        }

        const pokemonData = await res.json();

        return pokemonData;
    } catch (err) {
        console.error(err);
    }
};

export default getPokemon;
