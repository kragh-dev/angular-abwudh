import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { FavoritesComponent } from './site/favorites/favorites.component';
import { MovieSearchComponent } from './movie/movie-search/movie-search.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './site/auth-guard.service';
import { HomeComponent } from './site/home/home.component';
import { PageNotFoundComponent } from './site/page-not-found/page-not-found.component';
import { LoginComponent } from './site/login/login.component';
import { FooterComponent } from './site/footer/footer.component';
import { SignupComponent } from './site/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieInfoComponent,
    MoviesComponent,
    FavoritesComponent,
    MovieSearchComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'movies',component:MoviesComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'edit/:id',component:MovieEditComponent,canActivate:[AuthGuardService]},
      {path:'edit2/:id',component:MovieEditComponent},
      {path:'favorites',component:FavoritesComponent,canActivate:[AuthGuardService]},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
