import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public loggedIn=false;

  user:any

  constructor(private loginService:LoginService,private userService:UserService){}

  ngOnInit():void{
    this.loggedIn=this.loginService.isLoggedIn();
  }

  logoutUser(){
    this.loginService.logOut();
    location.reload();
  }

  // getUser(){
  //   this.userService.getUser().subscribe(
  //     user=>{
  //       console.log(user);
  //       this.user=user;
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   )
  // }
}
