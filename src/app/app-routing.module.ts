import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { HomeComponent } from './home/home.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { IsAdminGuard } from './is-admin.guard';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UsersIndexComponent } from './security/users-index/users-index.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'genres',
    component: IndexGenresComponent,
    canActivate: [IsAdminGuard],
  },
  {
    path: 'genres/create',
    component: CreateGenreComponent,
    canActivate: [IsAdminGuard],
  },
  {
    path: 'genres/edit/:id',
    component: EditGenreComponent,
    canActivate: [IsAdminGuard],
  },

  {
    path: 'actors',
    component: IndexActorsComponent,
    canActivate: [IsAdminGuard],
  },
  {
    path: 'actors/create',
    component: CreateActorsComponent,
    canActivate: [IsAdminGuard],
  },
  {
    path: 'actors/edit/:id',
    component: EditActorComponent,
    canActivate: [IsAdminGuard],
  },

  {
    path: 'movie-theaters',
    component: IndexMovieTheaterComponent,
    canActivate: [IsAdminGuard],
  },
  {
    path: 'movie-theaters/create',
    component: CreateMovieTheaterComponent,
    canActivate: [IsAdminGuard],
  },
  {
    path: 'movie-theaters/edit/:id',
    component: EditMovieTheaterComponent,
    canActivate: [IsAdminGuard],
  },

  {
    path: 'movies/create',
    component: CreateMovieComponent,
    canActivate: [IsAdminGuard],
  },
  {
    path: 'movies/edit/:id',
    component: EditMovieComponent,
    canActivate: [IsAdminGuard],
  },
  { path: 'movies/filter', component: MovieFilterComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'users',
    component: UsersIndexComponent,
    canActivate: [IsAdminGuard],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
