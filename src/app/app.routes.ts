import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs-config/tabs.routes').then((m) => m.routes),
  },
];
