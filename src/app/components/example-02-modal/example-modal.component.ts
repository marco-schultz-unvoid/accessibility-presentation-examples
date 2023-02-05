import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'accessibily-presentation-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleModalComponent {}
