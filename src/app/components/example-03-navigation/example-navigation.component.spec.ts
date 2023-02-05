import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNavigationComponent } from './example-navigation.component';

describe('ExampleNavigationComponent', () => {
  let component: ExampleNavigationComponent;
  let fixture: ComponentFixture<ExampleNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleNavigationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
