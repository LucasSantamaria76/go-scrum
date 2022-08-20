import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: true,
  confirmButtonText: 'Aceptar',
  confirmButtonColor: 'rgba(236, 53, 15, 1)',
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
