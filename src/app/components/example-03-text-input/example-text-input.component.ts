import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'accessibily-presentation-example-text-input',
  templateUrl: './example-text-input.component.html',
  styleUrls: ['./example-text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTextInputComponent {}
