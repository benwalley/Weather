var React = require('react');




var WeatherMessage = ({temp, location}) => {
	
	return(
		<div>
			<h3 className = "text-center">it is {temp[0]} in {temp[1]}</h3>
				
		</div>
	)
};
module.exports = WeatherMessage;