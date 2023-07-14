import PropTypes from 'prop-types';
import { List, Item, Btn, Contact } from './ContactList.styled';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const contactItem = () =>
    filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
      : contacts;
  return (
    <List>
      {contactItem().map(({ id, name, number }) => (
        <Item key={id}>
          <Contact> {`${name}: ${number}`}</Contact>
          <Btn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default ContactList;
