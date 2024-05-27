
/** Given array of items, divide into two hands of four each.
 * Returns array of 2 arrays
 *
 * Input:
 * [items]
 * Output:
 * [[hand1], [hand2]]
 */

function divideIntoHands(deck) {
  const hand1 = [];
  const cardsLeft = [...deck];

  while (cardsLeft.length > deck.length / 2) { //will not work for odd numbers
    console.log('Cards left', cardsLeft);
    const cardIndex = Math.floor(Math.random() * cardsLeft.length);
    hand1.push(cardsLeft[cardIndex]);
    cardsLeft.splice(cardIndex, 1);
  }

  return [hand1, cardsLeft];
}

export { divideIntoHands };
