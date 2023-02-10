import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTextInputComponent } from './example-text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormExamplesModule } from '../forms/forms.module';

@NgModule({
  declarations: [ExampleTextInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormExamplesModule],
  exports: [ExampleTextInputComponent],
})
export class ExampleTextInputModule {}
