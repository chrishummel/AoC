'use strict'

const fs = require('fs')

let promisedFS  = function(fileDir, encoding) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileDir, encoding, function(err, result) {
			if (err) {
				return reject(err)
			}
			return resolve(result)
		})
	})
}

module.exports = promisedFS



