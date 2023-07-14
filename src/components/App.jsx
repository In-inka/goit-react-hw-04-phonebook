import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import data from 'data.json';
import { Title, Phonebook } from './App.styled';

const LS_KEY = 'contact save';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? data;
  });
  const [filterContact, setFilterContact] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const submitContact = el => {
    if (contacts.some(({ name }) => name === el.name)) {
      Notify.failure(`${el.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, { ...el }]);
  };

  const onChangeFilter = evt => {
    setFilterContact(evt.target.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Phonebook>
      <Title>Phonebook</Title>
      <ContactForm SubmitContact={submitContact} />
      <Title>Contacts</Title>
      <Filter filter={filterContact} onChange={onChangeFilter} />
      <ContactList
        contacts={contacts}
        filter={filterContact.toLowerCase()}
        onDeleteContact={deleteContact}
      />
    </Phonebook>
  );
};
