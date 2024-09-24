import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '300px',
        margin: '28px auto',
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        type="text"
        name="name"
        fullWidth
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </Box>
  );
};
