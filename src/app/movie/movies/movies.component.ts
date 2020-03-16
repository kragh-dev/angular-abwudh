import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';
import { AuthService } from '../../site/auth.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../../site/favorites/favorites.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:IMovie[]
  filteredMovies:IMovie[]
  constructor(private movieService:MovieService,private authService:AuthService,private router:Router,private favService:FavoritesService) { }

  ngOnInit() {
    console.log(this.movieService.getMovies())
    this.movies = this.movieService.getMovies()
    this.filteredMovies = this.movies
    this.movieService.getMovieFilter().subscribe(
      (title:string) => {
        if(title!='')
          this.filteredMovies = this.movieService.getFilteredMovies(title,this.movies)
        else if(title=='')
          this.filteredMovies = this.movies
      }
    )
  }

  addToFav(movieId:number){
    if(!this.authService.loggedInUser)
    {
      this.router.navigateByUrl('favorites')
    }
    this.favService.addToFav(movieId)
  }

}
