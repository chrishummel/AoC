'use strict'
//Part 1

function countLetters(string) {
  let letterObj = {}
  for (let i=0; i<string.length; i++) {;
    let current = string.charAt(i)
    letterObj[current] ? letterObj[current] += 1 : letterObj[current] = 1;
  }
  return letterObj
}

function formatIndividualInput(string) {
  let sectorId = string.match(/\d/g).join('')
  let splitArr = string.replace(/-|\d|]/g,'').split('[')
  let encryptedString = splitArr[0]
  let checksum = splitArr[1]

  return { sectorId, encryptedString, checksum }

}

let test = formatIndividualInput ('vxupkizork-sgmtkzoi-pkrrehkgt-zxgototm-644[kotgr]')
console.log(test)
