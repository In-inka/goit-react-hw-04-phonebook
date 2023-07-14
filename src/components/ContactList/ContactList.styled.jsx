import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 350px;
  padding: 5px;
`;
export const Item = styled.li`
  padding: 5px;
  text-transform: uppercase;
  margin-bottom: 5px;

  box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
`;
export const Contact = styled.span`
  display: inline-block;
  min-width: 250px;
`;
export const Btn = styled.button`
  padding: 3px;
  background-color: #fff;
  cursor: pointer;

  text-transform: uppercase;

  border-radius: 10px;
  &:hover {
    background-color: #7cb9e8;
    box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  }
`;
