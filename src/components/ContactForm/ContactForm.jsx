import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Button, Form, Input } from '../../styles/sharedStyles';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} вже є в контактах.`);
      setName('');
      setPhone('');
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        throw new Error(`Тип поля - ${name} не обробляється`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <p>Phone</p>
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
      <Button type="submit" disabled={!(name && phone)}>
        Add contact
      </Button>
    </Form>
  );
};
