import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  /* display: block; */
  padding: 10px;
  border: 1px solid ${p => p.theme.colors.black};
  width: 300px;
`;

export const FormLabelSpan = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${p => p.theme.colors.error};
`;

export const FormBtn = styled.button`
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.grey};
  border-radius: 5px;
  padding: 3px 10px;
  :active {
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;
