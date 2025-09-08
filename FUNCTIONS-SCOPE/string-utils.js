function capitalizeWords(words) {
  return words.map((word) => {
    let firstLetter = word[0].toUpperCase();
    let rest = word.slice(1);
    return firstLetter + rest;
  });
}

function capitalize(words) {
  return words.map((word) => {
    let firstLetter = word[0].toUpperCase();
    let rest = word.slice(1);
    return firstLetter + rest;
  });
}

function reverseWords(words) {
  return words.map((word) => {
    let reverse = word.split("").reverse().join("");
    return reverse;
  });
}

function reverse(words) {
  return words.map((word) => {
    let reverse = word.split("").reverse().join("");
    return reverse;
  });
}

function lastElement(arr){
    return arr[arr.length -1];
}

function sumArray(arr){
    return arr.reduce((acc,curr) => acc + curr,0);
}
console.log(capitalizeWords(["hello", "dinesh", "mathy", "javascript"]));
console.log(capitalize(["dinesh", "mathy", "deepa", "karthick", "pranathi"]));
console.log(reverseWords(["inesh", "mathy", "deepa", "karthick"]));
console.log(reverse(["inesh", "mathy", "deepa", "gay", "javascript"]));
console.log(lastElement([1,2,3,4,5,10]));
console.log(lastElement(["a","b","c","d","e"]));
console.log(sumArray([1,2,3,4]));