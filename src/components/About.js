import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const About = (props) => {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1 className="display-4"> things to learn about me </h1>
					<p>This is where i will put things about me</p>
				</Container>
			</Jumbotron>
		</div>
	)
}

export default About