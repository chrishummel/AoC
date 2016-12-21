'use strict'
const fs = require('fs');

//Helper functions
function countLetters(string) {
  let letterObj = {};
  for (let i=0; i<string.length; i++) {
    let current = string.charAt(i);
    letterObj[current] ? letterObj[current] += 1 : letterObj[current] = 1;
  }
  return letterObj
}

function formatIndividualInput(string) {
  let original = string.replace(/\d|]/g, '').split('[');
  let originalString = original[0];
  let sectorId = Number(string.match(/\d/g).join(''));
  let splitArr = string.replace(/-|\d|]/g,'').split('[');
  let encryptedString = splitArr[0];
  let checksum = splitArr[1];

  return { sectorId, encryptedString, checksum, originalString }
}

function sortObject(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push([key, obj[key]])
  }
 arr.sort((a,b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] > b[0]) return 1;
    return -1;
  });

 return arr.map(x => x[0]).join('')
}

//Part 1

function decrypt(callback) {
  let sum = 0;
  fs.readFile('./Day_4.txt', 'utf-8', part1)

  function part1(err, encrypted) {
    let organized = encrypted.split('\n').map(string => formatIndividualInput(string));
    let realChecksum = organized.map(encryptedObj => {
      encryptedObj.actualChecksum = sortObject(countLetters(encryptedObj.encryptedString));
      return encryptedObj
    });

    realChecksum.forEach(function(obj) {
      if (obj.checksum === obj.actualChecksum.slice(0,5)) {
        obj.realRoom = true;
        sum += obj.sectorId
      }
    });

    callback ? callback(realChecksum) : console.log('Part 1 Answer: ', sum)
  
  }   
}

decrypt();

//Part 2

decrypt(part2);

function part2(roomObjs) {
  let filtered = roomObjs.filter( room => room.realRoom)
  let answer = filtered.map(room => {
    let answerStr = ''
    let spacedStr = room.originalString.replace(/-/g, ' ')
    let shiftFactor = room.sectorId%26
    for(let i=0; i<spacedStr.length; i++) {
      let currentLetter = spacedStr[i]
      if (currentLetter === ' ') { 
        answerStr += ' '
      } else {
        let letterIndex = alphaMap.indexOf(currentLetter) + shiftFactor
        if (letterIndex >= 26 ) letterIndex -= 26;
        answerStr += alphaMap.charAt(letterIndex)
      }
    }
    return { answerStr, sectorId: room.sectorId }
  })
  console.log(answer)
}

const alphaMap = 'abcdefghijklmnopqrstuvwxyz'



