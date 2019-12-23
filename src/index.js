import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
class GetSearchId extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		error: null,
  		isLoaded: false,
  	};
  }

componentDidMount() {
  fetch("https://front-test.beta.aviasales.ru/search")
    .then(res => res.json())
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
  let url = "https://front-test.beta.aviasales.ru/tickets?searchId=";
}

render() {
	const { error, isLoaded, searchId } = this.state;
	if (error) {
		return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
       searchId
      );
    }
  }
}
*/





class Page extends React.Component{

 // constructor (props) {

 // }

render() {
  return(
    <div className="page">

      <div className="logo">
        <img src="/src/logo.png">
        </img>
      </div>

      <div className="filter">
      </div>

        <div className="filtertext">
        количество пересадок
        </div>

        <div className="checkboxAll">
        </div>
        



      <div className="ticket1">
      </div>

      <div className="tabs">

      </div>

    </div>
    );
}

}


// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
