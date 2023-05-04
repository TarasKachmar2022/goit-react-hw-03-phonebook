import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../GlobalStyle';
import { FindContactsByName } from './App.styled';
import { Layout } from '../Layout/Layout';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';
import ContactList from '../ContactList';

const LS_KEY = 'contact_items';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactItems = JSON.parse(localStorage.getItem(LS_KEY));
    if (contactItems) {
      this.setState({ contacts: contactItems });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;

    const findContacts = contacts.find(
      contact => contact.name === newContact.name
    );

    if (findContacts) {
      alert(`${findContacts.name} is already in contacts.`);
      return;
    }

    // if (findContacts) {
    //   alert(`Контакт ${findContacts.name} вже існує!`);
    //   return;
    // }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  changeFilterValue = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;

    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilterContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />
        <h2>Contacts</h2>
        <FindContactsByName>Find contacts by name</FindContactsByName>
        <ContactsFilter
          inputValue={filter}
          changeFilterValue={this.changeFilterValue}
        />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;
