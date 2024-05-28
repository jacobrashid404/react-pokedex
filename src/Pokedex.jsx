import Pokecard from "./Pokecard.jsx";

/** Pokedex component
 *
 * Props: array of 'Pokemon' objects => [{name, id, type, base_experience}, ...]
 *        isWinner boolean
 * Renders: Pokegame => Pokedex => Pokecard
 *
 */
function Pokedex({ pokemon, isWinner }) {
    return (
        <div className="row row-cols-5">
            { pokemon.map(p => <Pokecard pokemon={p}/>) }
            <b>{isWinner ? "This hand wins!" : ""}</b>
        </div>
    );
}

export default Pokedex;