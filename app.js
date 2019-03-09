const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode.js');


const argv = yargs
.options({
	a : { demand: true,
		alias : 'address',
		describe : " address to fetch weather for",
		string : true
}})
.help()
.argv;

geocode.getCoordinates(argv.address);
 


