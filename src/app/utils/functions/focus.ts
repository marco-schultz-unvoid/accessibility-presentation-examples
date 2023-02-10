import { List } from 'immutable';
import { FormControlWithElement } from 'src/app/types/forms';

/**
 * Focuses the first form field that is invalid in a `List` of `FormControlWithElement`
 * items
 *
 * @param fields - The array of controls with their HTML elements
 */
export const focusFirstInvalidField = (
  fields: List<FormControlWithElement>
): void => {
  // Finds first invalid form field
  const firstInvalidField = fields.find(({ control }) => control.invalid);
  // Focuses it
  firstInvalidField?.element.focus();
};
