import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filtersSlice';
import { FilterInput, FilterWrapper, SearchIcon } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterWrapper>
      {/* Find contacts by name */}
      <SearchIcon />
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Find contacts by name"
      />
    </FilterWrapper>
  );
};
