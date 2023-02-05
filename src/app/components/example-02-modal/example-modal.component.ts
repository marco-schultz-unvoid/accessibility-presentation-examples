import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ModalService } from 'src/app/services/modal';
import { ModalBadComponent } from '../modal-bad/modal-bad.component';
import { ModalGoodComponent } from '../modal-good/modal-good.component';

@Component({
  selector: 'accessibily-presentation-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleModalComponent {
  @ViewChild('goodModalBtn') public goodModalBtn!: ElementRef<HTMLElement>;

  constructor(private readonly _modalService: ModalService) {}

  public async openBadModal(): Promise<void> {
    this._modalService.open(ModalBadComponent);
  }

  public async openGoodModal(): Promise<void> {
    const modalReference = this._modalService.open(ModalGoodComponent);

    // Refocus on the button that opened the modal when it closes
    await firstValueFrom(modalReference.data$);
    this.goodModalBtn.nativeElement.focus();
  }
}
