import './Pokecard.css';

/** Generates card for a Pokemon
 * Props: 'Pokemon' object => {name, id, type, base_experience}
 * Renders: Pokegame => Pokedex => Pokecard
 */
function Pokecard({ pokemon }) {
    const pokeImg =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    const altImgText = `${pokemon.name} image`;

    return (
        <div className='Pokecard'>
            <h1>{ pokemon.name }</h1>
            <img src={pokeImg} alt={altImgText}></img>
            <p>Type: { pokemon.type }</p>
            <p>EXP: { pokemon.base_experience }</p>
        </div>
    )
}

export default Pokecard;