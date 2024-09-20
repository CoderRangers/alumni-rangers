
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyFeedbacksPage } from './company-feedbacks.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: CompanyFeedbacksPage
      }, 
      {
        path: '',
        redirectTo: '/tabs/tab4', 
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab4',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyFeedbacksPageRoutingModule {}
