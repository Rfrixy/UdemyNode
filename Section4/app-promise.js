
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response)=>{
  if(response.data.status==='ZERO_RESULTS'){
    throw new Error('Unable to find that address');
  }

  latitude = response.data.results[0].geometry.location.lat;
  longitude = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/2252638b46427a0331972cb407d068d3/${latitude},${longitude}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);
}).then((response)=>{
  var temperature = response.data.currently.temperature;
  temperature = ((temperature - 32) * 5/9).toFixed(2);
  console.log(`It's currently ${temperature} degrees`);
}).catch((e)=>{
  if(e.code ==='ENOTFOUND'){
    console.log('Unable to connect to API servers');
  }else{
    console.log(e.message);
  }

});
