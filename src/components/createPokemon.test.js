/**
 * @jest-environment jsdom
 */

import createPokemon from './createPokemon.js';

describe('createPokemon', () => {
    const pokemonData = {
        species: {
            name: 'Test Name',
        },
        sprites: {
            front_default: 'https://github.com/Mariya-go',
        },
        abilities: [
            {
                ability: {
                    name: 'test1',
                },
            },
        ],
    };
    const container = createPokemon(pokemonData);
    const firstChild = container.children[0];
    const secondChild = container.children[1];

    test('container nodeName => DIV', () => {
        expect(container.nodeName).toEqual('DIV');
    });
    test('container className => container', () => {
        expect(container.className).toEqual('container');
    });
    test('container childCount => 4', () => {
        expect(container.childElementCount).toEqual(4);
    });

    test('firstChild nodeName => H2', () => {
        expect(firstChild.nodeName).toEqual('H2');
    });
    test('firstChild innerText => Test Name', () => {
        expect(firstChild.innerText).toEqual('Test Name');
    });

    test('secondChild nodeName => H2', () => {
        expect(secondChild.nodeName).toEqual('IMG');
    });
    test('secondChild alt => Test Name', () => {
        expect(secondChild.alt).toEqual('Test Name');
    });
    test('secondChild url => https://github.com/Mariya-go', () => {
        expect(secondChild.src).toEqual('https://github.com/Mariya-go');
    });
});
