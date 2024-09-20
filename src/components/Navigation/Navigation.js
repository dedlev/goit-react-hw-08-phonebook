import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { IsLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {IsLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
