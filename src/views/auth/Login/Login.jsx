import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Card, Input } from './../../../components';
import { LinkStyled } from '../LinkStyled';
import { invalidCredentials } from '../invalidCredentials';
import { fetchLogin } from '../fetchLogin';

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
    fetchLogin(userName, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res?.token);
        localStorage.setItem('userName', userName);
        localStorage.setItem('teamID', res?.teamID);
        navigate('/', { replace: true });
      })
      .catch(() => invalidCredentials());
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
          <Button type='submit' primary>
            Iniciar sesión
          </Button>
          <p>
            ¿No tienes cuenta? <LinkStyled to='/register'>Registrate aqui...</LinkStyled>
          </p>
        </form>
      </Card>
    </>
  );
};
