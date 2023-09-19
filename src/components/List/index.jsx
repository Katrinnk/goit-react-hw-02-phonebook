import CreateContact from 'Forms/CreateContact';
import { Filter } from 'Forms/Filter/ndex';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

const { Component } = require('react');

class ContactList extends Component {
  state = this.props.state;

  createContactList = contact => {
    const isAlreadyExist = this.state.contacts.find(
      el => el.name === contact.name
    );
    if (isAlreadyExist)
      return Notify.failure('Already exist in your phonebook!');

    const newContact = {
      ...contact,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  filterContact = filterQuery => {
    this.setState(prev => ({
      filter: prev.contacts.filter(el =>
        el.name.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    }));
  };

  render() {
    console.log('contacts', this.state.contacts);
    console.log('state', this.state);
    return (
      <>
        <CreateContact
          createContactList={this.createContactList}
          state={this.state}
        />
        <h5 className="ms-3">Contacts</h5>
        <Filter filterContact={this.filterContact} />
        <ul className="list-group">
          {(this.state.filter ?? this.state.contacts).map(el => (
            <li className="list-group-item ms-3 me-3" key={el.id}>
              {el.name}: {el.number}
              <button
                type="button"
                className="btn-close ms-5"
                aria-label="Close"
                onClick={() => this.handleDelete(el.id)}
              ></button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default ContactList;
