import Pokedex from "./Pokedex.jsx";
import { divideIntoHands } from "./utils.js";

/**
 * Take in deck of 'Pokemon' objects => [{name, id, type, base_experience}, ...]
 * and returns two separate hands. Determines a winner. Displays results to user.
 *
 * Renders: Pokegame => Pokedex => Pokecard
 *
 */
function Pokegame({ deck }) {
  const hands = divideIntoHands(deck);
  const hand1Total = hands[0].reduce((sum, pokemon) => sum + pokemon.base_experience, 0);
  const hand2Total = hands[1].reduce((sum, pokemon) => sum + pokemon.base_experience, 0);

  // console.log("hand1Total", hand1Total);
  // console.log("hand2Total", hand2Total);

  return (
    <div>
      <h3>Hand 1</h3>
      <div className="hand1">
        <Pokedex pokemon={hands[0]} isWinner={hand1Total > hand2Total} />
      </div>

      <h3>Hand 2</h3>
      <div className="hand2">
        <Pokedex pokemon={hands[1]} isWinner={hand2Total > hand1Total} />
      </div>
    </div>
  );
}

export default Pokegame;
