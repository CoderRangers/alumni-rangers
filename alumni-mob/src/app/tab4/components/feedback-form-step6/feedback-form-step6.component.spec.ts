import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbackFormStep6Component } from './feedback-form-step6.component';

describe('FeedbackFormStep6Component', () => {
  let component: FeedbackFormStep6Component;
  let fixture: ComponentFixture<FeedbackFormStep6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFormStep6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackFormStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
