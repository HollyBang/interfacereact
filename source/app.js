import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import './appsource.sass';

class App extends React.Component{
	render() {
		return <Jumbotron className="-fluid text-md-center custom" containerFluid={true}>
			<h1>React User Interface</h1>
			<p>with Sass and Bootstrap</p>
			<p><Button className="-primary" href="#" />
			<Button className="-danger -sm"/></p>
			<Button className="-primary -lg -block" disabled/>
	</Jumbotron>
	}
}

export default App;