const wordSection_1 = ["f", "n", "u"];
const wordSection_2 = ["d", "c", "n", "g", "i", "o"];
const wordSection_3 = ["s", "i", "!"];

/* strategy: get the correct order of elements for each array */
/* wordSection_1: */
const letterU = wordSection_1.pop();
wordSection_1.splice(1, 0, letterU);

console.log(wordSection_1);

/* wordSection_2: */
const letterD = wordSection_2.shift();
const letterO = wordSection_2.pop();
const letterI = wordSection_2.pop();
wordSection_2.splice(1, 0, letterO, letterD, letterI);

console.log(wordSection_2);

/* wordSection_3: */
const deletedLetter = wordSection_3.splice(1, 1);
wordSection_3.unshift(deletedLetter[0]);

console.log(wordSection_3);

/* move the exclamation mark */
const exclamation = wordSection_3.pop();
wordSection_1.push(exclamation);
console.log(wordSection_1);

/* final result */
const result = wordSection_2
  .slice()
  .concat(wordSection_3)
  .concat(wordSection_1);

/* add spaces */
result.splice(6, 0, " ");
result.splice(9, 0, " ");

console.log(result.join(""));
