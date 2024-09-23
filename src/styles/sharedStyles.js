import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  /* margin-left: 12px; */
  flex-direction: column;
  outline: 1px solid;
  width: 400px;
  padding: 10px 80px 10px 10px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 4px;
  font-size: 16px;
  outline: none;
  margin: 4px 0 16px;

  &:focus {
    outline: 2px solid rgb(96, 192, 255);
    border-radius: 4px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 160px;
  background-color: rgb(96, 192, 255);
  border-radius: 4px;

  &:disabled {
    background-color: #fff;
  }
`;
