import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService){}

  credentials={
    username:"",
    password:""
  }
  onSubmit(){
    console.log("form is submited");
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("We have to Submit the form to server");
      //token generate
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/dashboard";
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      console.log("Filed are empty");
      
    }
  }
}
