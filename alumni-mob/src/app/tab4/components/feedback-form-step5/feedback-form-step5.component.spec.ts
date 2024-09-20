import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbackFormStep5Component } from './feedback-form-step5.component';

describe('FeedbackFormStep5Component', () => {
  let component: FeedbackFormStep5Component;
  let fixture: ComponentFixture<FeedbackFormStep5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFormStep5Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackFormStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
