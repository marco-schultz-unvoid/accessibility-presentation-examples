import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAwfulComponent } from './form-awful.component';

describe('FormAwfulComponent', () => {
  let component: FormAwfulComponent;
  let fixture: ComponentFixture<FormAwfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAwfulComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormAwfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
