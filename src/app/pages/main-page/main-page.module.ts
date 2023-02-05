import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ExampleButtonsModule } from 'src/app/components/example-01-buttons/example-buttons.module';
import { ExampleModalModule } from 'src/app/components/example-02-modal/example-modal.module';
import { ExampleNavigationModule } from 'src/app/components/example-03-navigation/example-navigation.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    ExampleButtonsModule,
    ExampleModalModule,
    ExampleNavigationModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
