import Pokedex from "./Pokedex.jsx";
import { divideIntoHands } from "./utils.js";

/**
 * Take in deck of 'Pokemon' objects => [{name, id, type, base_experience}, ...] and returns two separate hands. Determines a winner. Displays results to user.
 *
 */
function Pokegame({ deck }) {
  const hands = divideIntoHands(deck);
  return (
    <div>
      <h3>Hand 1</h3>
      <div className="hand1">
        <Pokedex pokemon={hands[0]} />
      </div>

      <h3>Hand 2</h3>
      <div className="hand2">
        <Pokedex pokemon={hands[1]} />
      </div>
    </div>
  );
}

export default Pokegame;
