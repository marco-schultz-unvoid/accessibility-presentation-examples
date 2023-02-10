import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'accessibily-presentation-form-bad',
  templateUrl: './form-bad.component.html',
  styleUrls: ['./form-bad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBadComponent {}
