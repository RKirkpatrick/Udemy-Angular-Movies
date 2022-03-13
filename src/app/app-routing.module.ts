import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGeneresComponent } from './generes/index-generes/index-generes.component';
import { CreateGenereComponent } from './generes/create-genere/create-genere.component';
import { HomeComponent } from './home/home.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  { path: 'genres', component: IndexGeneresComponent },
  { path: 'genres/create', component: CreateGenereComponent },

  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorsComponent },

  { path: 'movietheaters', component: IndexMovieTheaterComponent },
  { path: 'movietheaters/create', component: CreateMovieTheaterComponent },

  { path: 'movies/create', component: CreateMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
