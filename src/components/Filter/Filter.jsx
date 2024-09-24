import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filtersSlice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      component="form"
      onChange={handleChange}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '300px',
        margin: '28px auto',
      }}
    >
      <TextField
        label="Find contacts by name"
        variant="outlined"
        type="email"
        value={filter}
        name="email"
        fullWidth
      />
    </Box>
  );
};
