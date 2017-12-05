// Import stuff other people made...
import React, { Component } from 'react';

// We are making a new Component. This Component is a class, but 
// also a subclass of the React.Component
class SearchBar extends Component{
	constructor(){
		super();
		// this.state = {
		// 	searchTerm: ""
		// }
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		console.log("Filter changed... "  + e.target.value);
		
		// this.setState({
		// 	searchTerm: e.target.value
		// });
		this.props.onChange(e.target.value);

	}


	// EVERY component MUST have a render method (Excpet the dumb ones)
	render(){
		const searchTerm = this.props.searchTerm
		return(
			<form className="search-bar col-sm-2 col-sm-offset-5">
            	<input value={searchTerm} onChange={this.handleChange} type="text" placeholder="Search..." />
            </form>
		)
	}
}


export default SearchBar
