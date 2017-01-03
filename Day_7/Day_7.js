'use strict'

const promisedFSreadFile = require('../promisefs.js');

// Part 1

promisedFS(__dirname + '/Day_7.txt', 'utf-8')
.then(result => console.log(result))