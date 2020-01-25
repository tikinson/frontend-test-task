import React from 'react';
import './tickets.css';


class GetTickets extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		error: null,
    		isLoaded: false,
            tickets: [],
            searchId: this.props.searchId,
    }
}

componentDidMount() {
  	fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.props.searchId}`)
    	.then(response => response.json())
    	.then(
    		(result) => {
    			this.setState({
    				isLoaded: true,
    				tickets: result.tickets,
    			});
    		}
    	)
    }


render() {
		const { error, isLoaded, tickets, searchId} = this.state;
	if (error) {
    	return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
    	return <div>Загрузка...</div>;
    } else {
    	return (
    	<div> {tickets} </div>
      );
    }
  }
}



export default GetTickets;