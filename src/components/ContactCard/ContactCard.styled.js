import styled from 'styled-components';

export const ContactItem = styled.li`
  margin: 10px 0;
`;

export const DeleteBtn = styled.button`
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 5px;
  padding: 3px 10px;
  margin-left: 10px;
  :active {
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;
