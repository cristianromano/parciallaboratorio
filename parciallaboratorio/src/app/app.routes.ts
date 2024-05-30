import { Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { authguardGuard } from '../guards/authguard.guard';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [authguardGuard],
  },
  {
    path: 'altarepartidor',
    loadComponent: () =>
      import('./altarepartidor/altarepartidor.component').then(
        (m) => m.AltarepartidorComponent
      ),
    canActivate: [authguardGuard],
  },
];
