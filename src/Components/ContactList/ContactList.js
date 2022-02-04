import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ContactListItem from '../ContactListItem/ContactListItem';

const List = styled.ul`
  width: 400px;
`;

const getCurrentPhonebook = (allContacts, filter) => {
  const normilizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normilizedFilter.trim()),
  );
};

export default function ContactList() {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getCurrentPhonebook(items, filter),
  );

  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};
