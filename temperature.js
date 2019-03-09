const request = require('request');

var weather = (lat,lng) => {

	request({
  url: `https://api.darksky.net/forecast/6c0a7e8aaf76a98fa6ebccb241c7cad2/${lat},${lng}`,
  json: true
}, (error, response, body) => {

	if (error){console.log('Server Error.')}

			else 
 
  console.log(`Temperature is ${body.currently.temperature}°F, feels like ${body.currently.apparentTemperature}°F `);
  console.log('-------------------------------------------');
  console.log(`Summary : ${body.currently.summary}`);

  

});

}

module.exports = {

	weather
};