import PropTypes from 'prop-types';
import { FilterInput } from './ContactsFilter.styled';

const ContactsFilter = ({ filter, changeFilterValue }) => {
  return (
    <FilterInput
      type="text"
      value={filter}
      onChange={changeFilterValue}
    ></FilterInput>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string,
  changeFilterValue: PropTypes.func,
};

export default ContactsFilter;
