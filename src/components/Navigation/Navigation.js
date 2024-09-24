import { useAuth } from '../../hooks';
import { StyledNavLink } from './Navigation.styled';
import { Home as HomeIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledNavLink to="/">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon sx={{ fontSize: '1rem', marginRight: '0.5rem' }} />
          Home
        </Box>
      </StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};
