import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyFeedbacksPage } from './company-feedbacks.page';

describe('CompanyFeedbacksPage', () => {
  let component: CompanyFeedbacksPage;
  let fixture: ComponentFixture<CompanyFeedbacksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFeedbacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
