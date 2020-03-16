import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';
import { IMovie } from '../../movie/movie';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  constructor(private favService:FavoritesService) { }

  favItems: IMovie[]
  total: number

  ngOnInit() {
    this.favItems = this.favService.getFavorites()
    this.total = this.favService.calclulateTotal()
  }

  onRemoveMovie(movieId:number){
    this.favService.deleteFromFav(movieId)
    this.total = this.favService.calclulateTotal()
  }
}