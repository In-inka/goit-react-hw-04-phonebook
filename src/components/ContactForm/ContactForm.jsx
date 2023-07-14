import { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Btn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeInput = e => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onSubmitContact = evt => {
    evt.preventDefault();

    const { name, number } = this.state;

    this.props.SubmitContact({
      id: shortid.generate(),
      name: name,
      number: number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.onSubmitContact}>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeInput}
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
            onChange={this.onChangeInput}
          />
          <Btn type="submit">Add contact</Btn>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  SubmitContact: PropTypes.func.isRequired,
};

export default ContactForm;
