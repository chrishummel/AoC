'use strict'

const fs = require('fs');


function updateCountArr(word, countArr) {
	let wordArr = word.split('');
	wordArr.map((letter, index) => {
		if (!countArr[index] ) {
			countArr[index] = {}
		}
		if (!countArr[index][letter]) {
			countArr[index][letter] = 1;
		} else {
			countArr[index][letter] += 1;
		}
	})
	return countArr
}

function largestKey(obj) {
	let largest = '';
	let largestVal = 0;

	Object.keys(obj).map(key => {
		if (obj[key] > largestVal) {
			largest = key;
			largestVal = obj[key]
		}
	})
	return largest;
}


//Part 1
function fsPart1() {
	fs.readFile(__dirname + '/Day_6.txt', 'utf-8', Part1)
}

function Part1(err, input) {
	let splitWordArr = input.split('\n')
	let counts = splitWordArr.reduce((accum, word) => updateCountArr(word, accum), [])
	let result1 = counts.map(countObj => largestKey(countObj)).join('')
	console.log('Part 1 Answer: ', result1)
 }

fsPart1()


