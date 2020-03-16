import { Injectable, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../movie/movie.service';
import { IMovie } from '../../movie/movie';
import { IFavorites } from './favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private movieService:MovieService) { }
  movieList:IMovie[] = this.movieService.getMovies()
  favorites:IFavorites = {favItems:[],total:0}
  movieAdded:boolean = false
  movieNotAdded:boolean = false
  movieToBeAdded:IMovie
  @Output() favoritesUpdated = new EventEmitter()
  getFavorites():IMovie[]{
    return this.favorites.favItems
  }
  calclulateTotal():number{
    this.favorites.total = this.favorites.favItems.length
    return this.favorites.total
  }
  addToFav(movieId:number){
    if(movieId>0)
    {
      let index:number
      console.log(movieId)
      this.movieToBeAdded = this.movieService.getMovie(movieId)
      index = this.favorites.favItems.findIndex(movie => movie.id == this.movieToBeAdded.id)
      console.log(index)
      if(index == -1)
      {
        this.favorites.favItems.push(this.movieToBeAdded)
        this.movieAdded = true
        setTimeout(()=>{
          this.movieAdded = false
        },1000)
      }
      else
      {
        this.movieNotAdded = true
        setTimeout(()=>{
          this.movieNotAdded = false
        },1000)
      }
    }
    else
    {
      console.log(movieId)
    }
  }

  deleteFromFav(movieId:number){
    this.favorites.favItems.splice(this.favorites.favItems.findIndex(movie => movie.id == movieId),1)
  }

  clearFav()
  {
    this.favorites = {favItems:[],total:0}
  }
}
