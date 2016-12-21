'use strict';

let crypto = require('crypto');
const input = 'wtnhxymk';

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

