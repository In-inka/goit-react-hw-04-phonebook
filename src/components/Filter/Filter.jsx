import PropTypes from 'prop-types';

import { Form, Label, Name } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Form>
      <Label>Find contacts by name </Label>
      <Name type="text" name="filter" value={filter} onChange={onChange} />
    </Form>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
