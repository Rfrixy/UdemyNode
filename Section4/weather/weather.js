const request  = require('request');


var key = "2252638b46427a0331972cb407d068d3";

var getWeather = (latitude, longitude, callback)=>{
  request({
    url:`https://api.darksky.net/forecast/2252638b46427a0331972cb407d068d3/${latitude},${longitude}` ,
    json: true
  }, (error,response,body) => {
    if(!error && response.statusCode === 200){
      callback(undefined,{
        temperature:(body.currently.temperature - 32)*5/9,
        apparentTemperature: (body.currently.apparentTemperature - 32)*5/9
      });
    }else{
      callback('Unable to fetch weather');
    }

  });
}

module.exports = {
  getWeather
};
