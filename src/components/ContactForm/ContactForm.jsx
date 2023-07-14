import { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Btn } from './ContactForm.styled';

const ContactForm = ({ SubmitContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = e => {
    e.preventDefault();

    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        console.log('Sorry...');
    }
  };

  const onSubmitContact = evt => {
    evt.preventDefault();

    SubmitContact({
      id: shortid.generate(),
      name: name,
      number: number,
    });

    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={onSubmitContact}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number </Label>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  SubmitContact: PropTypes.func.isRequired,
};

export default ContactForm;
