import { FormControl } from '@angular/forms';

export type FormControlWithElement = {
  readonly control: FormControl<string | boolean | null>;
  readonly element: HTMLElement;
};
