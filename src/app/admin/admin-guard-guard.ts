import { CanActivateFn ,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';
import { session } from '../utils/session';
import { Authservice } from '../Authservice/authservice';
export const adminGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router:Router=inject(Router)
  const protectedRoutes:string[]=['/dashboard','/gallery'];

  const auth=inject(Authservice);
  if(auth.isLoggedIn()){}
  return protectedRoutes.includes(state.url)&& !session
  ?router.navigate(['/'])
:false
};
