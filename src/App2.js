import React, { Component } from 'react';
import './App.css';
import Storehouse from './layouts/Storehouse';

class App2 extends Component {
    constructor() {
        super();
        this.state = {

            storehouse: []
        }
    }



    getStorehouse() {
        this.setState({
            storehouse: [
                {
                }
            ]

        });

    }


    componentDidMount() {
        this.getStorehouse();
    }

    handleStorehouse(form) {
        let Storehouse = this.state.storehouse;
        Storehouse.push(form);
        this.setState({ storehouse: Storehouse });
    }
    render() {
        return (
            <Storehouse storehouse={this.state.storehouse} />

        );
    }
}



export default App2;
