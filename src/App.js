import React, { Component } from 'react';
import SignIn from './Components/SignIn';
// import { Admin } from 'react-admin';
// import authProvider from './Components/authProvider';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      signin: []

    }
  }

  getSignIn() {
    this.setState({
      signin: [
        {
        }
      ]

    });

  }


  componentDidMount() {
    this.getSignIn();
  }

  handleSignIn(form) {
    let SignIn = this.state.signin;
    SignIn.push(form);
    this.setState({ signin: SignIn });
  }
  render() {
    return (
      // <Admin authProvider={authProvider}>
      <SignIn signin={this.state.signin} />
      // </Admin>
    );
  }
}



export default App;

