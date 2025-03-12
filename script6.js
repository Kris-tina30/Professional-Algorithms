// Search and Replace

// Perform a search and replace the sentence using the arguments provided and
// return the new sentence.

// The first argument is the sentence to perform the search and replace on.
// The second argument is the word that you will be replacing (before).
// The third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it.

//declare function searchReplace, have 3 arguments: sentence to perform,
// the word that you will be replacing, what you will be replacing

//make variable for array
//change string to array with split method, can use trim() first
//for loop throw array

//condition to find word: word = before
// second condition to check if the first letter of the word was capital
//if true then replace first letter of the after word to capital to use
//toUpperCase method and concat with rest of the word with use slice method
//replase finded word to after
//use join to make arr again to string
//print renew sentense

let string = " My name is Kristina";
let before = "my";
let after = "your";

function searchReplace(string, before, after) {
  let stringArray = string.trim().split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].toLowerCase() == before.toLowerCase()) {
      if (stringArray[i][0] == stringArray[i][0].toUpperCase()) {
        stringArray[i] = after[0].toUpperCase() + after.slice(1);
      } else {
        stringArray[i] = after;
      }
    }
  }

  return stringArray.join(" ");
}
console.log(searchReplace(string, before, after));
