import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UniqueService } from 'src/app/services/unique';

@Component({
  selector: 'accessibily-presentation-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordFieldComponent implements AfterContentInit {
  public passwordInputId = '';

  constructor(private readonly _unique: UniqueService) {}

  public ngAfterContentInit(): void {
    this.passwordInputId = this._unique.id('form-input');
  }
}
