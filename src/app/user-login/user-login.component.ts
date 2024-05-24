import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: '',
  };
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {
    
  }
}
