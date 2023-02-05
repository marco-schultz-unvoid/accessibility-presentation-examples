import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalReference } from 'src/app/services/modal-reference';

@Component({
  selector: 'accessibily-presentation-modal-bad',
  templateUrl: './modal-bad.component.html',
  styleUrls: ['./modal-bad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBadComponent {
  constructor(private readonly _modalReference: ModalReference) {}

  public close(): void {
    this._modalReference.close(null);
  }
}
