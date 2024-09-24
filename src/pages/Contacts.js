import { Box, IconButton } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useState } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function Contacts() {
  const [showForm, setShowForm] = useState(false);

  const handleOnClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    setShowForm(false);
  };

  return (
    <div>
      <Filter />
      {!showForm && (
        <IconButton onClick={handleOnClick} color="primary" size="large">
          <AddCircle fontSize="inherit" />
        </IconButton>
      )}
      {showForm && <ContactForm onSubmit={handleFormSubmit} />}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ContactPhoneIcon sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />
        <h4>Contacts</h4>
      </Box>
      <ContactList />
      <GlobalStyle />
    </div>
  );
}
