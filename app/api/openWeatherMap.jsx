var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=96ea47ded677be7c21cc76e6f7bdff25&units=imperial';

module.exports = {
	getTemp: function (location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){

				throw new Error(res.data.message)
			}else{
				return [res.data.main.temp,res.data.name];
			}
		},function(res){
			throw new Error(res.data.message);
		})
	}
}


//96ea47ded677be7c21cc76e6f7bdff25
