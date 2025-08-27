import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Book } from './book/book';
import { Home } from './home/home';
import { Services } from './services/services';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Feedback } from './feedback/feedback';
import { adminGuard } from './admin/admin-guard-guard';
import { Logout } from './logout/logout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: Login },
//   { path: 'dashboard', component: Dashboard ,
//     canActivate:[adminGuard]
//   },
  {
    path: 'book',
    component: Book,
  },
  { path: 'dashboard', component: Dashboard },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'about', component: About },
  { path: 'gallery', component: Gallery ,
    canActivate:[adminGuard]
  },
  {path:'logout',component:Logout},
  { path: 'feedback', component: Feedback },
];
