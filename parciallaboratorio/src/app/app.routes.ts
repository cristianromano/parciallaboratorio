import { Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { authguardGuard } from '../guards/authguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { authadminGuard } from '../guards/authadmin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
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
  {
    path: 'listarepartidores',
    loadComponent: () =>
      import('./listarepartidores/listarepartidores.component').then(
        (m) => m.ListarepartidoresComponent
      ),
    canActivate: [authguardGuard],
  },
  {
    path: 'helados',
    loadComponent: () =>
      import('./helados/helados.component').then((m) => m.HeladosComponent),
    canActivate: [authadminGuard],
  },
  { path: '**', component: NotfoundComponent },
];
