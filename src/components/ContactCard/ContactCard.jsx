import PropTypes from 'prop-types';
import { ContactItem, DeleteBtn } from './ContactCard.styled';

const ContactCard = ({ id, name, number, onDelete }) => {
  return (
    <ContactItem>
      {name}: {number}
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactCard;
