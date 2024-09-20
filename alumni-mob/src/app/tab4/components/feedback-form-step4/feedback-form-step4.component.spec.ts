import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbackFormStep4Component } from './feedback-form-step4.component';

describe('FeedbackFormStep4Component', () => {
  let component: FeedbackFormStep4Component;
  let fixture: ComponentFixture<FeedbackFormStep4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFormStep4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackFormStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
