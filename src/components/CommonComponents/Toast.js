import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: true,
  confirmButtonText: 'Aceptar',
  confirmButtonColor: 'rgb(5, 117, 134)',
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
