import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGoodComponent } from './form-good/form-good.component';
import { FormBadComponent } from './form-bad/form-bad.component';
import { FormAwfulComponent } from './form-awful/form-awful.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingEllipsisComponent } from './loading-ellipsis/loading-ellipsis.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormGoodComponent,
    FormBadComponent,
    FormAwfulComponent,
    LoadingEllipsisComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [FormGoodComponent, FormBadComponent, FormAwfulComponent],
})
export class FormExamplesModule {}
