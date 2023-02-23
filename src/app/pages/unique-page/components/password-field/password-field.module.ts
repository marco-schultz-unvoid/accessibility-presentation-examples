import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordFieldComponent } from './password-field.component';

@NgModule({
  declarations: [PasswordFieldComponent],
  imports: [CommonModule],
  exports: [PasswordFieldComponent],
})
export class PasswordFieldModule {}
