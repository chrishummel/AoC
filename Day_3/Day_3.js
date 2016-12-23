'use strict'

const fs = require('fs');

//Part 1
function possibleTriangle(err, list) {
  let triangleArr = list.split('\n').map(x => x.split(' ')).map(y => y.filter(x => (x !== '')))
  let filtered = triangleArr.filter( function(sides) {
    sides.sort((x,y) => x - y)
    if (Number(sides[0]) + Number(sides[1]) > Number(sides[2])) {
      return true
    } else {
      return false
    }
  })

  console.log('Part 1 Answer: ',filtered.length)

}

fs.readFile(__dirname + '/Day_3.txt', 'utf-8', possibleTriangle);



//Part 2
function sidewaysTriangle(err, list) {
  let threeTri = list.match(/[\s\S]{1,48}/g)
      .map(x => x.replace(/\n/g, '').split(' '))
      .map(y => y.filter(x => (x !== '')))
  
  let individTri = threeTri.map(function(threeArr) {
    let organizedTri = [];
    organizedTri.push([threeArr[0], threeArr[3], threeArr[6]])
    organizedTri.push([threeArr[1], threeArr[4], threeArr[7]])
    organizedTri.push([threeArr[2], threeArr[5], threeArr[8]])
    return organizedTri
  })
  let flattened = individTri.reduce((a,b) => a.concat(b), [])

  let filtered = flattened.filter( function(sides) {
    sides.sort((x,y) => x - y)
    if (Number(sides[0]) + Number(sides[1]) > Number(sides[2])) {
      return true
    } else {
      return false
    }
  })

  console.log('Part 2 Answer: ',filtered.length)

}

fs.readFile(__dirname + '/Day_3.txt', 'utf-8', sidewaysTriangle);


