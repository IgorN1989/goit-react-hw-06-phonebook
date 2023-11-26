import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/actions';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = newFilter => dispatch(setFilter(newFilter));

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">
        Find contact by name
        <FilterInput
          type="text"
          name="filter"
          placeholder="Search"
          onChange={e => onChangeFilter(e.target.value)}
        />
      </FilterLabel>
    </FilterContainer>
  );
};
