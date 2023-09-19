import ContactList from './List';

const { Component } = require('react');

const MAIN_STATE = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: null,
};

class App extends Component {
  state = MAIN_STATE;

  render() {
    return (
      <>
        <ContactList state={this.state} />
      </>
    );
  }
}

export default App;
