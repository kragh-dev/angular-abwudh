import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FavoritesService } from '../favorites/favorites.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,private favService:FavoritesService) { }

  ngOnInit() {
  }

  getUser(){
    return this.authService.loggedInUser
  }

  isAdmin()
  {
    return this.authService.isAdmin
  }

  onLogout()
  {
    this.favService.clearFav()
    this.authService.logout()
  }
}
