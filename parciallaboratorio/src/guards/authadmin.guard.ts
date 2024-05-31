import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';

export const authadminGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);

  try {
    const isAdmin = await authService.esAdmin();
    console.log('isAdmin:', isAdmin);
    if (!isAdmin) {
      Swal.fire({
        title: 'Error',
        text: 'No eres admin',
        icon: 'error',
      });
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error('Error checking admin status:', error);
    // Handle error, e.g., redirect to login or display an error message
    return false; // Deny access on error
  }
};
