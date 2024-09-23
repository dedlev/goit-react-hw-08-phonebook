import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const FilterWrapper = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 16px;
`;

export const FilterInput = styled.input`
  width: 200px;
  border: 1px solid #ccc;
  padding: 4px 4px 4px 30px;
  font-size: 16px;
  outline: none;
  margin: 8px 0 28px;

  &:focus {
    outline: 2px solid rgb(96, 192, 255, 0.7);
    border-radius: 4px;
  }
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  left: 8px;
  top: 35%;
  transform: translateY(-50%);
  color: gray;
`;
