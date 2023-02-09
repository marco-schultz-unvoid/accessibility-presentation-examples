import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { requiredAfterTrimValidator } from 'src/app/utils/validators/requiredAfterTrim';

@Component({
  selector: 'accessibily-presentation-example-text-input',
  templateUrl: './example-text-input.component.html',
  styleUrls: ['./example-text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTextInputComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput!: ElementRef<HTMLElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLElement>;

  public form = this._fb.group({
    name: this._fb.control('', [
      Validators.required,
      Validators.maxLength(50),
      requiredAfterTrimValidator,
    ]),
    email: this._fb.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
      requiredAfterTrimValidator,
    ]),
  });

  ngAfterViewInit(): void {
    this.focusNameInput();
  }

  constructor(private readonly _fb: NonNullableFormBuilder) {}

  focusNameInput(): void {
    this.nameInput.nativeElement.focus();
  }
  focusEmailInput(): void {
    this.emailInput.nativeElement.focus();
  }

  submitHandler(): void {
    const { name, email } = this.form.controls;

    if (this.form.valid) {
      alert(`Name: ${name.value},\nEmail: ${email.value}`);
      return void 0;
    }

    alert('Data is invalid!');
  }
}
