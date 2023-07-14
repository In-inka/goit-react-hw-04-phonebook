import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import data from 'data.json';
import { Title, Phonebook } from './App.styled';

const LS_KEY = 'contact save';
export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  componentDidMount() {
    const saveConacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (saveConacts) {
      this.setState({
        contacts: [...saveConacts],
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  submitContact = el => {
    const { contacts } = this.state;

    if (contacts.some(({ name }) => name === el.name)) {
      Notify.failure(`${el.name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { ...el }],
    }));
  };

  onChangeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm SubmitContact={this.submitContact} />
        <Title>Contacts</Title>
        <Filter filter={filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter.toLowerCase()}
          onDeleteContact={this.deleteContact}
        />
      </Phonebook>
    );
  }
}
