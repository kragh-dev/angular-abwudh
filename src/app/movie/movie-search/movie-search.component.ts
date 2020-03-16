import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

  onSearch(event:any){
    // console.log(event.target.value);
    this.movieService.getMovieFilter().next( event.target.value );
  }

}
