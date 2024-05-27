import Pokecard from "./Pokecard.jsx";

/** Pokedex component
 *
 * Props: array of 'Pokemon' objects => [{name, id, type, base_experience}, ...]
 * Returns: div containing sub-divs with Pokemon info
 *
 */
function Pokedex({ pokemon }) {
    return (
        <div className="row row-cols-5">
            { pokemon.map(p => <Pokecard pokemon={p}/>)}
        </div>
    );
}

export default Pokedex;