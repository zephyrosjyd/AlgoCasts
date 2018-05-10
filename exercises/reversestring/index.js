// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '');
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

module.exports = reverse;

// function reverse(str) {
//   // const arr = str.split('');
//   // arr.reverse();
//   // return arr.join('');
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   let reversed = '';
//
//   // classical syntax
//   //var arr = str.split('');
//   //for (var i=0; i<str.length; i++) {
//   // temp = arr[i];
//   // arr[i] = arr[str.length - (i+1)];
//   // arr[str.length - (i+1)] = temp;
//   //}
//   //return arr.join('');
//
//   // modern syntax (ES2015)
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
