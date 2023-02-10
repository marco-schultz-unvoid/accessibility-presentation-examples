import { AbstractControl } from '@angular/forms';

/**
 * Checks if the string is a valid URL
 *
 * @param control - The {@link AbstractControl} to get the string
 * @returns The error if it has one, otherwise `null`
 */
export const urlValidator = (
  control: AbstractControl<string>
): { readonly url: true } | null => {
  const { value } = control;

  const URL_REGEX = /^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)?$/;

  // If value doesn't match URL regex, it's invalid
  if (!URL_REGEX.test(value)) {
    return { url: true };
  }

  // Value is valid
  return null;
};
