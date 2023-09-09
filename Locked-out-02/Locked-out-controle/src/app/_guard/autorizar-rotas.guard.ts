import { CanActivateFn } from '@angular/router';

export const autorizarRotasGuard: CanActivateFn = (route, state) => {
  return true;
};
