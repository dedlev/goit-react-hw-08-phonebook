import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, Box, CircularProgress } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Box>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <List>
          {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              onDelete={handleDelete}
            />
          ))}
        </List>
      )}
    </Box>
  );
};
