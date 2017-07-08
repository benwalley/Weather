var React = require('react');




var WeatherMessage = ({temp, location}) => {
	
	return(
		<div>
			<p>it is {temp[0]} in {temp[1]}</p>
				
		</div>
	)
};
module.exports = WeatherMessage;