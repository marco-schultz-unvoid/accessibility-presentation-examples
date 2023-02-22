import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquePageComponent } from './unique-page.component';

describe('UniquePageComponent', () => {
  let component: UniquePageComponent;
  let fixture: ComponentFixture<UniquePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniquePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UniquePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
