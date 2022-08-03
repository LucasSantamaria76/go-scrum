import Swal from 'sweetalert2';

export const invalidCredentials = () =>
  Swal.fire({
    title: 'Credenciales inválidas',
    text: 'Por favor introduzca credenciales válidas',
    confirmButtonText: 'Aceptar',
    width: '400px',
    timer: 5000,
    timerProgressBar: true,
  });
