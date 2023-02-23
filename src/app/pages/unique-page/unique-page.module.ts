import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PasswordFieldModule } from './components/password-field/password-field.module';
import { UniquePageComponent } from './unique-page.component';

@NgModule({
  declarations: [UniquePageComponent],
  imports: [CommonModule, PasswordFieldModule],
  exports: [UniquePageComponent],
})
export class UniquePageModule {}
