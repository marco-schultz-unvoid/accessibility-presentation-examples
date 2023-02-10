import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  getInputValidationMessage,
  markControlsAsFilled,
  shouldShowErrorMessage,
} from 'src/app/utils/functions/forms';
import { requiredAfterTrimValidator } from 'src/app/utils/validators/requiredAfterTrim';
import { urlValidator } from 'src/app/utils/validators/url';

@Component({
  selector: 'accessibily-presentation-form-awful',
  templateUrl: './form-awful.component.html',
  styleUrls: ['./form-awful.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAwfulComponent {
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
    website: this._fb.control('', [urlValidator, Validators.maxLength(50)]),
  });

  /* Helpers */
  public getErrorMessage = getInputValidationMessage;
  public shouldShowError = shouldShowErrorMessage;

  /* Lifecycle methods & constructor */
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
  }
}
