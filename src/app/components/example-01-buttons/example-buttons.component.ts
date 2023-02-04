import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'accessibily-presentation-example-buttons',
  templateUrl: './example-buttons.component.html',
  styleUrls: ['./example-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleButtonsComponent {}
