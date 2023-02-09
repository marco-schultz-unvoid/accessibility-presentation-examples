import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleButtonsModule } from 'src/app/components/example-01-buttons/example-buttons.module';
import { ExampleModalModule } from 'src/app/components/example-02-modal/example-modal.module';
import { ExampleTextInputModule } from 'src/app/components/example-03-text-input/example-text-input.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    ExampleButtonsModule,
    ExampleModalModule,
    ExampleTextInputModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
