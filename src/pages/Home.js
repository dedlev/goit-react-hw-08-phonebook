import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const MyComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        color: '#1976d2',
      }}
    >
      <ContactPageIcon sx={{ fontSize: '3rem', marginRight: '0.5rem' }} />
      <Typography variant="h1" component="h1">
        Contacts manager welcome page
      </Typography>
    </Box>
  );
};

export default MyComponent;
