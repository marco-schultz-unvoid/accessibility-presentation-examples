import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'accessibily-presentation-loading-ellipsis',
  templateUrl: './loading-ellipsis.component.html',
  styleUrls: ['./loading-ellipsis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingEllipsisComponent {}
