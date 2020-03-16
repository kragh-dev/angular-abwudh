import { Injectable } from '@angular/core';
import { IMovie } from './movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList: IMovie[] = [
    {id:1,title:"Aladdin",boxOffice:3560000600,active:true,dateOfLaunch: new Date("23 June 1998"),genre:"Adventure",hasTeaser:true,imageUrl:"https://images-2.wuaki.tv/system/shots/154410/original/aladdin-2019-1566986378.jpeg", teaserUrl:"https://www.youtube.com/watch?v=foyufD52aog"},
    {id:2,title:"Avengers",boxOffice:2345678901,active:true,dateOfLaunch: new Date("23 June 1999"),genre:"Superhero",hasTeaser:true,imageUrl:"https://images.wallpapersden.com/image/download/8k-avengers-endgame_63994_1920x1080.jpg",teaserUrl:"https://www.youtube.com/watch?v=eOrNdBpGMv8"},
    {id:3,title:"Titanic",boxOffice:2145678901,active:true,dateOfLaunch: new Date("23 June 1999"),genre:"Romance",hasTeaser:false,imageUrl:""},
    {id:4,title:"Jurassic World",boxOffice:1945678901,active:false,dateOfLaunch: new Date("23 June 1999"),genre:"Science Fiction",hasTeaser:false,imageUrl:"",teaserUrl:""},
    {id:5,title:"Vedalam",boxOffice:1234567890,active:true,dateOfLaunch:new Date("11 Nov 2015"),genre:"Thriller",hasTeaser:true,imageUrl:"https://www.elsetge.cat/myimg/f/88-880467_ajith-kumar-hd-wallpapers-1920x1080p-ajith-kumar-in.jpg",teaserUrl:"https://www.youtube.com/watch?v=b3WB7ogte-g"}
  ]

  genres:string[] = ["Adventure","Science Fiction","Action","Superhero","Romance","Thriller"]

  movieFilter = new Subject();
  
  getGenres():string[]{
    return this.genres
  }

  getMovies():IMovie[]{
    return this.movieList
  }

  getMovie(movieId:number){
    return this.movieList[this.movieList.findIndex(movie => movie.id == movieId)]
  }

  getMovieFilter():Subject<Object>{
    return this.movieFilter
  }

  getFilteredMovies(title:string, movies:IMovie[]):IMovie[]{
    if(title!=''){
      const result = this.movieList.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
      return result ? result : []
    }
  }

  updateMovie(movie:IMovie){
    console.log(movie)
    let movieIndex:number = this.movieList.findIndex(mov => mov.id == movie.id )
    this.movieList[movieIndex] = movie
    console.log(this.movieList[movieIndex])
  }
}
