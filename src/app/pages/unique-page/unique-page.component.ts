import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UniqueService } from 'src/app/services/unique';

@Component({
  selector: 'accessibily-presentation-unique-page',
  templateUrl: './unique-page.component.html',
  styleUrls: ['./unique-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniquePageComponent implements AfterContentInit {
  public formTitleId = '';
  public nameInputId = '';
  public emailInputId = '';

  constructor(private readonly _unique: UniqueService) {}

  public ngAfterContentInit(): void {
    this.formTitleId = this._unique.id();
    this.nameInputId = this._unique.id();
    this.emailInputId = this._unique.id();
  }
}
