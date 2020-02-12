import React from 'react';
/*import './tickets.css';*/
import SortTickets from './sortTickets'






class GetTickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
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
            })
            .then(searchId => fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`))
            .then(response => response.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        tickets: result.tickets,
                    });

            //console.log(this.state.tickets[0].carrier);
            //console.log(this.state.tickets[0].price);
            //console.log(this.state.tickets[0].segments);
            //{origin, destination, date, stops, duration}

                }

            )
    }

    render() {
        const { error, isLoaded, tickets, } = this.state;

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <SortTickets tickets={this.state.tickets} />
            );
        }
    }
}






export default GetTickets;