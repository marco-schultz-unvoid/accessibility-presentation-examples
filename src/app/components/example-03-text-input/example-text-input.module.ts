import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTextInputComponent } from './example-text-input.component';

@NgModule({
  declarations: [ExampleTextInputComponent],
  imports: [CommonModule],
  exports: [ExampleTextInputComponent],
})
export class ExampleTextInputModule {}
