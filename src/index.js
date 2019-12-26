
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './components/logo';
import Filter from './components/filter';
import Tabs from './components/tabs';

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
      <Logo />
      <Filter />
      <Tabs />
    </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
