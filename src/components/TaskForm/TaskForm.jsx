import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Button, Input, InputSelect, Textarea } from '../../components';
import { types } from '../../redux/types';
import { FormContainer } from './FormContainer';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const TaskForm = ({ handleClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    status: '',
    description: '',
    importance: '',
  };

  const btnsStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '10px',
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
        toast.success('Tarea creada con éxito', {
          position: 'top-center',
          autoClose: 3000,
          style: {
            padding: '20px',
            borderRadius: '10px',
            background: '#00000057',
            color: '#fff',
            fontSize: '1.5rem',
          },
        });
        dispatch({ type: types.NEW_TASK, payload: data?.result?.task });
        resetForm();
      });
  };

  const required = '* Campo obligatorio';

  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string().min(4, 'La cantidad mínima de caracteres es 4').required(required),
      status: Yup.string().required(required),
      description: Yup.string(),
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
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
              optionObj={{ NEW: 'nueva', 'IN PROGRESS': 'en proceso', FINISHED: 'terminada' }}
              error={touched.status && errors.status}
              helperText={errors.status}
            />
            <InputSelect
              name='importance'
              placeholderText='Seleccionar una prioridad'
              value={values.importance}
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
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && errors.description}
            helperText={errors.description}
          />
          <div style={btnsStyles}>
            <Button type='submit' primary width='100px'>
              Crear
            </Button>
            <Button type='button' width='100px' onClick={() => handleClose()}>
              Salir
            </Button>
          </div>
        </form>
      </FormContainer>
      <Toaster />
    </>
  );
};
