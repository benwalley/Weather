var React = require('react');
var {Link} = require('react-router')


var Examples = () => {
	return(
		<div>
			<h1 className = "text-center">These are some examples!</h1>
			<p>Here are some example locations that you could try out</p>
			<ol>
				<li>
					<Link to = "/?location=Springfield">Springfield</Link>
				</li>
				<li>
					<Link to = "/?location=Anarctica">Anarctica</Link>
				</li>
				
			</ol>
		</div>
	)
};

module.exports = Examples;