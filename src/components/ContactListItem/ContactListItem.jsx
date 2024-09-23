import React from 'react';
import { DeleteButton } from './ContactListItem.styled';

export const ContactListItem = ({
  contact: { id, name, number },
  onDelete,
}) => {
  return (
    <li>
      <p>
        {name}: {number}
        <DeleteButton type="button" onClick={() => onDelete(id)}>
          Delete
        </DeleteButton>
      </p>
    </li>
  );
};
