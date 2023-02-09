import { AbstractControl } from '@angular/forms';
import { isString, isEmpty } from 'lodash-es';

/**
 * Check if the string isn't empty after `trim`
 *
 * @param control - The {@link AbstractControl} to get the string
 * @returns The error if it has one, otherwise `null`
 */
export const requiredAfterTrimValidator = (
  control: AbstractControl<string>
): { readonly required: true } | null => {
  const { value } = control;

  // Value is string and it's empty after trim, so it's invalid
  if (isString(value) && isEmpty(value.trim())) {
    return { required: true };
  }

  // Value is valid
  return null;
};
