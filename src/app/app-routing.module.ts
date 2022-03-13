import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGeneresComponent } from './generes/index-generes/index-generes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'genres', component: IndexGeneresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
