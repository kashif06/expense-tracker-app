import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'category',
    loadComponent: () => import('./page/category/category.page').then( m => m.CategoryPage)
  },
  {
    path: 'journey',
    loadComponent: () => import('./page/journey/journey.page').then( m => m.JourneyPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./page/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'otp',
    loadComponent: () => import('./page/otp/otp.page').then( m => m.OtpPage)
  },
];
