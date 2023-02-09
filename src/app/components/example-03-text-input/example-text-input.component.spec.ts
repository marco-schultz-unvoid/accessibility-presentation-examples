import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTextInputComponent } from './example-text-input.component';

describe('ExampleTextInputComponent', () => {
  let component: ExampleTextInputComponent;
  let fixture: ComponentFixture<ExampleTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleTextInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
