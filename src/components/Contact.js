import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Contact = (props) => {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1 className="display-4"> this is where my contact info will go, as well as linkedin and github.</h1>
					<p>I can display different links, maybe a form or something</p>
				</Container>
			</Jumbotron>
		</div>
	)
}

export default Contact