import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 350px;
`;

export const Label = styled.label`
  margin-bottom: 3px;
`;
export const Input = styled.input`
  padding: 5px;
  padding-left: 15px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
`;
export const Btn = styled.button`
  padding: 5px;
  box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  cursor: pointer;

  text-transform: uppercase;

  border-radius: 15px;
  &:hover {
    background-color: #7cb9e8;
    box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  }
`;
