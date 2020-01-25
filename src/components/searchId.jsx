/*import React from 'react';
import './tickets.css';



class GetSearchId extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		error: null,
    		isLoaded: false,
    		searchId: null,
    		
    };
  }

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
	}
    		
	render() {
		const { error, isLoaded, searchId } = this.state;
	
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

export default GetSearchId;*/