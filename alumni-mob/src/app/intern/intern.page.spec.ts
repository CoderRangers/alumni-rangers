import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternPage } from './intern.page';

describe('InternPage', () => {
  let component: InternPage;
  let fixture: ComponentFixture<InternPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
