import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTextInputComponent } from './example-text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExampleTextInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ExampleTextInputComponent],
})
export class ExampleTextInputModule {}
