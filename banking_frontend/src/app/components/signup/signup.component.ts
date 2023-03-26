import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private userService:UserService){}

  email = new FormControl('',[Validators.required,Validators.email]);

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'You must enter a valid email';
    }

    return this.email.hasError('email')?'Not a valid email':'';
  }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  }

  ngOnInit():void{

  }

  formSubmit(){
    console.log(this.user);

    if(this.user.username == '' || this.user.username == null || this.user.password == '' || this.user.password ==null || this.user.email == '' || this.user.email == null || this.user.firstname == '' || this.user.firstname == null || this.user.lastname == '' || this.user.lastname ==null || this.user.username == null || this.user.password == '')
    {
      alert('Username is required!!');
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data: any)=>{
        //success
        console.log(data);

        alert("successfully done.");
        window.location.reload();
      },
      (error:any)=>{
        console.log(error);

        alert("Sometime went wrong");
        
      }
    )
  }
}
