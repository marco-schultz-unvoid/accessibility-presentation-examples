import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleButtonsComponent } from './example-buttons.component';

@NgModule({
  declarations: [ExampleButtonsComponent],
  imports: [CommonModule],
  exports: [ExampleButtonsComponent],
})
export class ExampleButtonsModule {}
