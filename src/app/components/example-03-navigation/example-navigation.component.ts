import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'accessibily-presentation-example-navigation',
  templateUrl: './example-navigation.component.html',
  styleUrls: ['./example-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleNavigationComponent {}
