import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Button, Form, Input, Label } from '../../styles/sharedStyles';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit();

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} вже є в контактах.`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error(`Тип поля - ${name} не обробляється`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <p>Name</p>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        <p>Phone</p>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit" disabled={!(name && number)}>
        Add contact
      </Button>
    </Form>
  );
};
