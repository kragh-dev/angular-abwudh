import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '../movie';
import { AuthService } from '../../site/auth.service';
import { Router } from '@angular/router';
import { FavoritesService } from '../../site/favorites/favorites.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input('theMovie') movie:IMovie;
  isAdmin:boolean = false
  @Output() addToFavRequest: EventEmitter<number> = new EventEmitter<number>()
  constructor(private authService:AuthService,private router:Router,private favService:FavoritesService) { }

  ngOnInit() {
    this.isAdmin = this.isAdminCheck()
  }

  onAddToFav(movieId:number){
    this.addToFavRequest.emit(movieId);
  }

  onEdit(movieId:number){
    this.router.navigateByUrl('/edit/'+movieId);
  }
  isAdminCheck()
  {
    return this.authService.isAdmin
  }
}
