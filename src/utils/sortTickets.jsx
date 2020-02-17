import React from 'react';
import GetTickets from './getTickets'




class SortTickets extends React.Component {
	constructor(props){
	super(props);
	this.state = { 

		renderData: [],  //will be props to render in tickets.jsx
		};

	}
    
    componentDidMount() {



    }






	render(){
		const renderData = this.state;
console.log(Array.from(this.props.tickets)); // for each elements.......
		return (
			1
			);
	}

}








export default SortTickets;