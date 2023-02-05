import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal';
import { ModalBadComponent } from '../modal-bad/modal-bad.component';

@Component({
  selector: 'accessibily-presentation-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleModalComponent {
  constructor(private readonly _modalService: ModalService) {}

  public async openBadModal(): Promise<void> {
    const modalReference = this._modalService.open(ModalBadComponent);

    // Refocus on the button that opened the modal when it closes
    // await firstValueFrom(modalReference.data$);
    // this.techTalkBtn.nativeElement.focus();
  }
}
