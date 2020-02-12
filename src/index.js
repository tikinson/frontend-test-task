import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './components/logo';
import Filter from './components/filter';
import Tabs from './components/tabs';
import GetTickets from './bll/getTickets';
import SortTickets from './bll/sortTickets';




class Page extends React.Component {

    render() {
        return (
            <div className="page">
            <Logo />
            <Filter />
            <Tabs />
            <GetTickets />
            
          </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);