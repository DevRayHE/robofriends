import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	//Discord Tylim suggested edit, still same problem
	//onSearchChange = (event) => {
	//	this.setState({ searchfiled: event.target.value },()=>{
	//	const filteredRobots = this.state.robots.filter(robots =>{
	//		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	//	})
	//	console.log(filteredRobots)})
	//}

	//original format, exact same as lecture video
	onSearchChange = (event) => {
		this.setState({ searchfiled: event.target.value })
		const filteredRobots = this.state.robots.filter(robots =>{
 		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		 console.log(filteredRobots)
	}

	render() {
		return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={this.state.robots}/>
		</div>
		);
	}

}

export default App;