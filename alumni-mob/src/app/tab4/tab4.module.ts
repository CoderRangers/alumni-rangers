import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { CompanyComponent } from './components/company/company.component';
import { FeedbackFormStep1Component } from './components/feedback-form-step1/feedback-form-step1.component';
import { FeedbackFormStep2Component } from './components/feedback-form-step2/feedback-form-step2.component';
import { FeedbackFormStep3Component } from './components/feedback-form-step3/feedback-form-step3.component';
import { FeedbackFormStep4Component } from './components/feedback-form-step4/feedback-form-step4.component';
import { FeedbackFormStep5Component } from './components/feedback-form-step5/feedback-form-step5.component';
import { FeedbackFormStep6Component } from './components/feedback-form-step6/feedback-form-step6.component';
import { CompanyFeedbacksPageModule } from './company-feedbacks/company-feedbacks.module';
import { FeedbackFormHeaderComponent } from './components/feedback-form-header/feedback-form-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ReactiveFormsModule,
    CompanyFeedbacksPageModule
  ],
  declarations: [
    Tab4Page,
    CompanyComponent,
    FeedbackFormStep1Component,
    FeedbackFormStep2Component,
    FeedbackFormStep3Component,
    FeedbackFormStep4Component,
    FeedbackFormStep5Component,
    FeedbackFormStep6Component,
    FeedbackFormHeaderComponent,
  ]
})
export class Tab4PageModule {}
