import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './components/logo';
import Filter from './components/filter';
import Tabs from './components/tabs';
import GetTickets from './components/tickets';



class Page extends React.Component {

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
        return (
          <div className="wrapper">
            <Logo />
            <Tabs />
            <Filter  />
            <GetTickets searchId={this.props.searchId} />
          </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);