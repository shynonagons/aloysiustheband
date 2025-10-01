export function getRandomLyric() {
  const lyrics = [
    "It was hard to think you thought too much / of the oligarch vampires who fall in love at your touch",
    "Hey now baby we can run it / we can run it on the wire / run out all the medication / and it wouldn't be long",
    "I know a few too many ghosts now",
    "You give a dollar to a telephone psychic / you give your number to a sentient icepick / you get a paper-thin simile of real love",
    "Here's how we'll start / pluck out the hatred from your heart / render a new song / harbingers of new dawn",
  ];
  const randomIndex = Math.floor(Math.random() * lyrics.length);
  return lyrics[randomIndex];
}
