import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGoodComponent } from './form-good.component';

describe('FormGoodComponent', () => {
  let component: FormGoodComponent;
  let fixture: ComponentFixture<FormGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGoodComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
