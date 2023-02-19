import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormExamplesModule } from '../forms/forms.module';
import { ExampleTextInputComponent } from './example-text-input.component';

@NgModule({
  declarations: [ExampleTextInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormExamplesModule],
  exports: [ExampleTextInputComponent],
})
export class ExampleTextInputModule {}
