import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternPage } from './intern.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: InternPage
      }, 
      {
        path: '',
        redirectTo: '/tabs/tab2', 
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternPageRoutingModule {}
