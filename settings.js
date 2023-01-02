const fs = require('fs')

global.creator = 'Arasya' 
global.apikey = ["Jo", "Syaa"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
