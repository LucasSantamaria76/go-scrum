import styled from '@emotion/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Input, InputSelect, Textarea, Toast } from '../../components';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const TaskForm = () => {
  const initialValues = {
    title: '',
    status: '',
    description: '',
    importance: '',
  };

  const onSubmit = () => {
    fetch(`${API_ENDPOINT}task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({ task: values }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Toast.fire({
          icon: 'success',
          title: `Tu tarea se creo correctamente`,
        });
        resetForm();
      });
  };

  const required = '* Campo obligatorio';

  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string().min(6, 'La cantidad mínima de caracteres es 6').required(required),
      status: Yup.string().required(required),
      description: Yup.string().required(required),
      importance: Yup.string().required(required),
    });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, handleBlur, values, resetForm } = formik;

  return (
    <>
      <FormContainer>
        <h2>Crear Tarea</h2>
        <h4>Crea tus tareas</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type='text'
              name='title'
              placeholder='Titulo'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.title && touched.title}
              helperText={errors.title}
            />
            <InputSelect
              name='status'
              placeholderText='Seleccionar un estado'
              value={values.continent}
              onChange={handleChange}
              onBlur={handleBlur}
              optionObj={{ NEW: 'nueva', 'IN PROGRESS': 'en proceso', FINISHED: 'terminada' }}
              error={touched.status && errors.status}
              helperText={errors.status}
            />
            <InputSelect
              name='importance'
              placeholderText='Seleccionar una prioridad'
              value={values.continent}
              onChange={handleChange}
              onBlur={handleBlur}
              optionObj={{ LOW: 'baja', MEDIUM: 'media', HIGH: 'alta' }}
              error={touched.importance && errors.importance}
              helperText={errors.importance}
            />
          </div>
          <Textarea
            name='description'
            placeholder='Descripción'
            value={values.continent}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && errors.description}
            helperText={errors.description}
          />
          <Button type='submit' width='100px'>
            Crear
          </Button>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 10px;
  form {
    width: 100%;
    padding-right: 15px;

    div {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0.6rem;
      @media (min-width: 1300px) {
        flex-direction: row;
      }
    }
  }
`;
