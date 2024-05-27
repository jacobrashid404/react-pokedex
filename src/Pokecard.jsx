import './Pokecard.css';

/** Generating a card for a Pokemon
 * Props: 'Pokemon' object => {name, id, type, base_experience}
 * Returns: Pokemon's name, image, type and base experience in a div
 */
function Pokecard({ pokemon }) {
    const pokeImg =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    return (
        <div className='Pokecard'>
            <h1>{ pokemon.name }</h1>
            <img src={pokeImg} alt="pokemon image"></img>
            <p>Type: { pokemon.type }</p>
            <p>EXP: { pokemon.base_experience }</p>
        </div>
    )
}

export default Pokecard;