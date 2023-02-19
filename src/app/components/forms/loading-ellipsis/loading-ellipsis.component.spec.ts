import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { LoadingEllipsisComponent } from './loading-ellipsis.component';

describe(LoadingEllipsisComponent.name, () => {
  let component: LoadingEllipsisComponent;
  let fixture: ComponentFixture<LoadingEllipsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingEllipsisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
