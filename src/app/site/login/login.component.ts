import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IUser } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(username:string,password:string){
    let user:IUser = this.authService.authenticate(username,password)
    if(user!=null)
    {
      this.router.navigateByUrl('/')
    }
  }
}
