import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: true,
  confirmButtonText: 'Aceptar',
  timer: 8000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
