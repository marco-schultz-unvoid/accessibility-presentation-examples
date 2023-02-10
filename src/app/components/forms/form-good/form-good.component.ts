import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { List } from 'immutable';
import { FormControlWithElement } from 'src/app/types/forms';
import { focusFirstInvalidField } from 'src/app/utils/functions/focus';
import {
  getInputValidationMessage,
  markControlsAsFilled,
  shouldShowErrorMessage,
} from 'src/app/utils/functions/forms';
import { requiredAfterTrimValidator } from 'src/app/utils/validators/requiredAfterTrim';
import { urlValidator } from 'src/app/utils/validators/url';

@Component({
  selector: 'accessibily-presentation-form-good',
  templateUrl: './form-good.component.html',
  styleUrls: ['./form-good.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGoodComponent implements AfterViewInit {
  @ViewChild('nameInput') private readonly _nameInput!: ElementRef<HTMLElement>;
  @ViewChild('emailInput')
  private readonly _emailInput!: ElementRef<HTMLElement>;
  @ViewChild('websiteInput')
  private readonly _websiteInput!: ElementRef<HTMLElement>;
  @ViewChild('submitButton')
  private readonly _submitButton!: ElementRef<HTMLElement>;

  /* Input fields with their elements */
  public get inputFields(): List<FormControlWithElement> {
    return List([
      {
        control: this.form.controls.name,
        element: this._nameInput.nativeElement as HTMLElement,
      },
      {
        control: this.form.controls.email,
        element: this._emailInput.nativeElement as HTMLElement,
      },
      {
        control: this.form.controls.website,
        element: this._websiteInput.nativeElement as HTMLElement,
      },
    ]);
  }

  /* Form */
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
    website: this._fb.control('', [
      Validators.required,
      urlValidator,
      Validators.maxLength(50),
      requiredAfterTrimValidator,
    ]),
  });

  /* Helpers */
  public getErrorMessage = getInputValidationMessage;
  public shouldShowError = shouldShowErrorMessage;

  /* Lifecycle methods & constructor */
  ngAfterViewInit(): void {
    this.focusFirstInput();
  }

  constructor(private readonly _fb: NonNullableFormBuilder) {}

  /* Submit */
  submitHandler(): void {
    const { name, email, website } = this.form.controls;

    if (this.form.valid) {
      alert(
        `Name: ${name.value},\nEmail: ${email.value},\nWebsite: ${website.value}`
      );
      return void 0;
    }

    markControlsAsFilled(this.form.controls);
    this.focusFirstInvalid();
  }

  /* Focus */
  public focusFirstInput = (): void => {
    this.inputFields.get(0)?.element.focus();
  };

  public focusField = (index: number): void => {
    this.inputFields.get(index)?.element.focus();
  };

  public focusFirstInvalid = (): void =>
    focusFirstInvalidField(this.inputFields);

  focusSubmitButton(): void {
    this._submitButton.nativeElement.focus();
  }
}
