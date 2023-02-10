import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBadComponent } from './form-bad.component';

describe('FormBadComponent', () => {
  let component: FormBadComponent;
  let fixture: ComponentFixture<FormBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
