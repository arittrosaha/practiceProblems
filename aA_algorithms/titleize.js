// Write a method that capitalizes each word in a string like a book title
// Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'

function titleize(title) {
  const littleWords = ['and', 'the', 'over'];

  const words = title.split(' ');
  const titleizedWords = words.map( (word, idx) => {
    if (idx !== 0 && littleWords.indexOf(word) >= 0) {
      return word.toLowerCase();
    } else {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    }
  });

  return titleizedWords.join(' ');
}
