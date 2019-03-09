
const request = require('request');

const temperature = require('./temperature.js');


var getCoordinates = (address) => {

var encodedAddress = encodeURIComponent(address);


request({
  url: `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=38ae89c02aab44eaa5dc3b3f006979b9`,
  json: true
}, (error, response, body) => {

	if (error){console.log('Server Error.')}
		else if(body.total_results === 0){console.log('Address is not valid.')}
			else if(body.status.message === 'OK') {
  			
  				console.log(`Location : ${body.results[0].formatted}`);
				temperature.weather(body.results[0].geometry.lat,body.results[0].geometry.lng);

   
}});



};



module.exports = {

	getCoordinates,
	
};