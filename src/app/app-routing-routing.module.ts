import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UniquePageComponent } from './pages/unique-page/unique-page.component';

const routes: Routes = [
  { path: 'unique', pathMatch: 'full', component: UniquePageComponent },
  { path: 'examples', pathMatch: 'full', component: MainPageComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'examples',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
