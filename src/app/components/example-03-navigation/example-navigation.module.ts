import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleNavigationComponent } from './example-navigation.component';

@NgModule({
  declarations: [ExampleNavigationComponent],
  imports: [CommonModule],
  exports: [ExampleNavigationComponent],
})
export class ExampleNavigationModule {}
