import { IoAddCircle } from 'react-icons/io5';
import { IconContext } from 'react-icons';
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
      <IconContext.Provider
        value={{
          color: 'DeepSkyBlue',
          size: '2em',
          className: 'global-class-name',
        }}
      >
        {!showForm && (
          <IoAddCircle
            type="button"
            onClick={handleOnClick}
            style={{ cursor: 'pointer' }}
          ></IoAddCircle>
        )}
      </IconContext.Provider>
      {showForm && <ContactForm onSubmit={handleFormSubmit} />}
      <h4>Contacts</h4>
      <ContactList />
      <GlobalStyle />
    </div>
  );
}
