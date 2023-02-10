import { ChangeDetectionStrategy, Component } from '@angular/core';

type FormType = 'awful' | 'bad' | 'good';

@Component({
  selector: 'accessibily-presentation-example-text-input',
  templateUrl: './example-text-input.component.html',
  styleUrls: ['./example-text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTextInputComponent {
  openedForm?: FormType;

  openForm = (form: FormType): void => {
    this.openedForm = form;
  };
}
