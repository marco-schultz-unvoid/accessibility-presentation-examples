import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGoodComponent } from './modal-good.component';

describe('ModalGoodComponent', () => {
  let component: ModalGoodComponent;
  let fixture: ComponentFixture<ModalGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalGoodComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
