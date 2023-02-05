import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalReference } from 'src/app/services/modal-reference';

@Component({
  selector: 'accessibily-presentation-modal-good',
  templateUrl: './modal-good.component.html',
  styleUrls: ['./modal-good.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalGoodComponent {
  constructor(private readonly _modalReference: ModalReference) {}

  public close(): void {
    this._modalReference.close(null);
  }
}
