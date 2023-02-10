import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGoodComponent } from './form-good/form-good.component';
import { FormBadComponent } from './form-bad/form-bad.component';
import { FormAwfulComponent } from './form-awful/form-awful.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormGoodComponent, FormBadComponent, FormAwfulComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [FormGoodComponent, FormBadComponent, FormAwfulComponent],
})
export class FormsModule {}
