const path = require('path');
 
module.exports = {
	mode: 'development',
	entry: './files.js',
	output: {
		path: path.resolve(__dirname, 'js'),
		filename: 'blocks.js'
	}
};