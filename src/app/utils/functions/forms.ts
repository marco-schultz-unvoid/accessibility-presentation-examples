import { FormControl } from '@angular/forms';
import { isUndefined } from 'lodash';
import { FORM_INPUT_ERROR_MESSAGES } from 'src/app/constants/forms.constants';

/**
 * Used for returning the validation error message of a text input field
 *
 * @param control - The `FormControl` to get the validation errors from
 * @returns The appropriate message for the validation errors of the control
 */
export const getInputValidationMessage = (
  control: FormControl<unknown>
): string | null => {
  const { errors } = control;

  if (errors) {
    if (!isUndefined(errors['email'])) {
      return FORM_INPUT_ERROR_MESSAGES.email;
    }
    if (!isUndefined(errors['url'])) {
      return FORM_INPUT_ERROR_MESSAGES.url;
    }
    if (!isUndefined(errors['required'])) {
      return FORM_INPUT_ERROR_MESSAGES.required;
    }
    if (!isUndefined(errors['maxlength'])) {
      return FORM_INPUT_ERROR_MESSAGES.maxLength;
    }
  }

  return null;
};

/** Marks all form controls as dirty and touched to display validation errors */
export const markControlsAsFilled = (
  controls: Record<string, FormControl>
): void => {
  for (const control of Object.values(controls)) {
    control.markAsTouched();
    control.markAsDirty();
  }
};

/**
 * Used to determine wether the form control should display an error message
 *
 * @param control - the `FormControl`
 * @returns a `boolean`
 */
export const shouldShowErrorMessage = (control: FormControl): boolean => {
  // TODO: can be a pipe
  return control.dirty && control.touched && control.invalid;
};
