import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg='';

  constructor(private service: RegistrationService, private route: Router) { }

  ngOnInit(): void {
  }
loginUser(){
this.service.loginUserFromRemote(this.user).subscribe(
  data => {
    console.log("response recived");
    this.route.navigate(['/home'])

  },
  error => {
    
    console.log("exception")
    this.msg="Bad credential";
  }
)
  
}
}
