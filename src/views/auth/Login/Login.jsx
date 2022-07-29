import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';

import { Button, Card, Input } from './../../../components';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #15bd85;
  cursor: pointer;
`;

export const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    userName: '',
    password: '',
  };

  const required = '* Campo obligatorio';

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string().min(4, 'La cantidad mínima de caracteres es 4').required(required),
      password: Yup.string().required(required),
    });

  const onSubmit = () => {
    const { userName, password } = values;

    fetch(`${API_ENDPOINT}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          localStorage.setItem('token', data?.result?.token);
          localStorage.setItem('userName', data?.result?.user.userName);
          navigate('/', { replace: true });
        } else {
          Swal.fire({
            title: 'Credenciales inválidas',
            text: 'Por favor introduzca credenciales válidas',
            confirmButtonText: 'Aceptar',
            width: '400px',
            timer: 5000,
            timerProgressBar: true,
          });
        }
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik;

  return (
    <>
      <Card title='Iniciar sesión'>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Input
            label='Nombre de usuario'
            name='userName'
            type='text'
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.userName && touched.userName}
            helperText={errors.userName}
          />
          <Input
            label='Contraseña'
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
            helperText={errors.password}
          />
          <Button type='submit'>Iniciar sesión</Button>
          <p>
            ¿No tienes cuenta? <LinkStyled to='/register'>Registrate aqui...</LinkStyled>
          </p>
        </form>
      </Card>
    </>
  );
};
