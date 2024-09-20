import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { CompanyComponent } from './components/company/company.component';
import { FeedbackFormStep1Component } from './components/feedback-form-step1/feedback-form-step1.component';
import { FeedbackFormStep2Component } from './components/feedback-form-step2/feedback-form-step2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, CompanyComponent, FeedbackFormStep1Component, FeedbackFormStep2Component]
})
export class Tab4PageModule {}
