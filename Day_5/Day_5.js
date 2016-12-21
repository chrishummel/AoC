'use strict';

let crypto = require('crypto');
const input = 'wtnhxymk';

//Part 1
console.log('---------------------------------------')
console.log('               Part 1')
console.log('---------------------------------------')

let answer = [];
let int = 0

while ( answer.length < 8) {
  let inputString = input + String(int);
  let hash = crypto.createHash('md5').update(inputString).digest('hex');
  if (hash.match(/^0{5}/)) {
    answer.push(hash.charAt(5));
    console.log('Found One!: ', hash.charAt(5))
  }
  int++
}

console.log('Part 1 Answer: ', answer.join(''));

//Part 2
console.log('---------------------------------------')
console.log('               Part 2')
console.log('---------------------------------------')

let answer2 = [];
let int2 = 0

while ( answer2.join('').length < 8) {
  let inputString = input + String(int2);
  let hash = crypto.createHash('md5').update(inputString).digest('hex');
  if (hash.match(/^0{5}/)) {
    if (!answer2[hash.charAt(5)] && hash.charAt(5) < 8 ) {
      console.log('Found One! Position:' + hash.charAt(5)+ ' Value:'+ hash.charAt(6))
      answer2[hash.charAt(5)] = hash.charAt(6)
    }
  }
  int2++
}

console.log('Part 2 Answer: ', answer2.join(''));
