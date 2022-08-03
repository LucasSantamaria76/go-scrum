import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';

import { Button, Card, Input, InputSelect, Toast } from '../../../components';
import { FormControlLabel, Switch } from '@mui/material';
import { LinkStyled } from '../LinkStyled';
import { fetchLogin } from '../fetchLogin';

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const Register = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch(`${API_ENDPOINT}auth/data`);
    const data = await res.json();
    setData(data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  const initialValues = {
    userName: '',
    password: '',
    email: '',
    teamID: '',
    role: '',
    continent: '',
    region: '',
    switch: false,
  };

  const required = '* Campo obligatorio';

  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string().min(4, 'La cantidad mínima de caracteres es 4').required(required),
      password: Yup.string().required(required),
      email: Yup.string().email('Por favor introduzca un email válido').required(required),
      role: Yup.string().required(required),
      continent: Yup.string().required(required),
      region: Yup.string().required(required),
    });

  const handleChangeContinent = (value) => {
    setFieldValue('continent', value);
    value !== 'America' && setFieldValue('region', 'Otro');
  };

  const onSubmit = () => {
    const teamID = !values.teamID ? uuid() : values.teamID;
    const { userName, password, email, role, continent, region } = values;

    fetch(`${API_ENDPOINT}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          userName,
          password,
          email,
          teamID,
          role,
          continent,
          region,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code < 300) {
          Toast.fire({
            icon: 'success',
            title: `Usuario ${userName} creado correctamente`,
            html: `<h3>Usuario creado como ${role}</h3>
          <p>en el equipo con el ID: ${teamID}</p>
          `,
          });

          fetchLogin(userName, password).then((res) => {
            localStorage.setItem('token', res?.token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('teamID', res?.teamID);
            navigate('/', { replace: true });
          });
        } else
          Toast.fire({
            icon: 'error',
            title: `El usuario ${userName} no se ha podido crear`,
            text: `El email ${email} ya está en uso`,
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, handleBlur, values, setFieldValue } = formik;

  return (
    <>
      <Card title='Formulario de registro'>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Input
            label='Nombre de usuario'
            name='userName'
            type='text'
            autoComplete='name'
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
            autoComplete='off'
            error={touched.password && errors.password}
            helperText={errors.password}
          />
          <Input
            label='E-mail'
            type='text'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete='email'
            error={touched.email && errors.email}
            helperText={errors.email}
          />
          <FormControlLabel
            control={
              <Switch
                value={values.switch}
                onChange={() => formik.setFieldValue('switch', !formik.values.switch)}
                name='switch'
                color='error'
              />
            }
            label='Pertenecés a un equipo ya creado'
          />
          {values.switch && (
            <Input
              label='Por favor, introduce el identificador de equipo'
              name='teamID'
              type='text'
              autoComplete='teamID'
              value={values.teamID}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.teamID && touched.teamID}
              helperText={errors.teamID}
            />
          )}
          <InputSelect
            placeholderText='Seleccionar rol...'
            label='Rol'
            name='role'
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            option={data?.Rol}
            error={touched.role && errors.role}
            helperText={errors.role}
          />
          <InputSelect
            placeholderText='Seleccionar continente...'
            label='Continente'
            name='continent'
            value={values.continent}
            onChange={(e) => handleChangeContinent(e.target.value)}
            onBlur={handleBlur}
            option={data?.continente}
            error={touched.continent && errors.continent}
            helperText={errors.continent}
          />
          {values.continent === 'America' && (
            <InputSelect
              placeholderText='Seleccionar región...'
              label='Región'
              name='region'
              value={values.region}
              onChange={handleChange}
              onBlur={handleBlur}
              option={data?.region}
              error={touched.region && errors.region}
              helperText={errors.region}
            />
          )}
          <Button type='submit'>Registrarse</Button>
          <p>
            ¿Ya tienes cuenta? <LinkStyled to='/login'>Iniciar sesión aqui...</LinkStyled>
          </p>
        </form>
      </Card>
    </>
  );
};
