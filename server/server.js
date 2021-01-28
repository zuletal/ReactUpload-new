var express = require('express');
var app = express()

app.listen('3000' || process.env.PORT, err => {
	if (err)
		throw err
	console.log('Server started')
})