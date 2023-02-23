import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

import { AppComponent } from './app.component';
import { MainPageModule } from './pages/main-page/main-page.module';
import { UniquePageModule } from './pages/unique-page/unique-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainPageModule,
    UniquePageModule,
    AppRoutingRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
