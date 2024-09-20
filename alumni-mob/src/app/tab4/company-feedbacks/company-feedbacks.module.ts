import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyFeedbacksPageRoutingModule } from './company-feedbacks-routing.module';

import { CompanyFeedbacksPage } from './company-feedbacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyFeedbacksPageRoutingModule
  ],
  declarations: [CompanyFeedbacksPage]
})
export class CompanyFeedbacksPageModule {}
