import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBadComponent } from './modal-bad.component';

describe('ModalBadComponent', () => {
  let component: ModalBadComponent;
  let fixture: ComponentFixture<ModalBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalBadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
