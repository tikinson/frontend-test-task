import React from 'react';
import './tickets.css';






class GetTickets extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		error: null,
    		isLoaded: false,
    		searchId: null,
    		tickets: [],
    };
  }

componentDidMount() {
 fetch(`https://front-test.beta.aviasales.ru/search`)
  .then(response => response.json())
  .then(result => {
   const searchId = result.searchId;
    this.setState({
     isLoaded: true,
     tickets: searchId,
    });
    return searchId
   }
  )
  .then(searchId => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`))
  .then(response => response.json())
  .then(result => {
    this.setState({
     isLoaded: true,
     tickets: result.tickets,
    });

   }

  )
 }

	render() {
		const { error, isLoaded, searchId, tickets} = this.state;
	if (error) {
    	return <div>Ошибка: {error.message}</div>;
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