import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleModalComponent } from './example-modal.component';

@NgModule({
  declarations: [ExampleModalComponent],
  imports: [CommonModule],
  exports: [ExampleModalComponent],
})
export class ExampleModalModule {}
