import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({
  contact: { id, name, number },
  onDelete,
}) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={number} />
      <IconButton edge="end" color="secondary" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
