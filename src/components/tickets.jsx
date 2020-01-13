import React from 'react';
import './tickets.css';






class GetTickets extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		error: null,
    		isLoaded: false,
    		searchId: null,
    		tickets: []
    };
  }

 /* getSearchId = async (e) => {
    e.preventDefault();
    const api_url = await
    fetch(`https://front-test.beta.aviasales.ru/search`);
    const searchId = await api_url.json();
    console.log(searchId);
    }*/
componentDidMount() {
    fetch ('https://front-test.beta.aviasales.ru/search')
    	.then(response => response.json())
    	.then(
    		(result) => {
    			this.setState({
    				isLoaded: true,
    				searchId: result.searchId

    			});
    		},
    		(error) => {
            	this.setState({
            		isLoaded: true,
            		error
            	});
        	}
    	)


    	.then(response => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.searchId}`))
    	.then(response => response.json())
    	.then(
    		(result) => {
    			this.setState({
    				isLoaded: true,
    				searchId: result.tickets

    			});
    		},
    		
    	)


	}

	render() {
		const { error, isLoaded, searchId, tickets} = this.state;
	if (error) {
    	return <div>Ошиб: {error.message}</div>;
    } else if (!isLoaded) {
    	return <div>Загрузка...</div>;
    } else {
    	return (
    	<div> {searchId} </div>
      );
    }
  }
}






export default GetTickets;