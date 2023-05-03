import { Formik, Field } from 'formik';
import * as yup from 'yup';
import {
  Form,
  FormLabel,
  FormLabelSpan,
  ErrorMessage,
  FormBtn,
} from './ContactForm.styled';

// const PATTERN_FOR_NAME =
//   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// const PATTERN_FOR_TEL =
//   /+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}/;

const schema = yup.object().shape({
  // Приклад:
  // name: yup
  //   .string()
  //   .matches(
  //     PATTERN_FOR_NAME,
  //     "Заповніть коректно поле! Допустимі символи [a-zA-Zа-яА-Я] та ['][ ][-] але лише всередині тексту!"
  //   )
  //   .required("Поле обов'язкове для заповнення!"),
  name: yup.string().required(),
  number: yup.number().required(),
});

const ContactForm = ({ onSave }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onSave({ ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormLabel htmlFor="name">
          <FormLabelSpan>Name</FormLabelSpan>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </FormLabel>
        <FormLabel htmlFor="number">
          <FormLabelSpan>Number</FormLabelSpan>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </FormLabel>
        <FormBtn type={'submit'}>Add contact</FormBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
