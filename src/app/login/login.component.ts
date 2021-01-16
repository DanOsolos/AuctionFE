import { InterfaceUtil } from './../util/interfaceutil';
import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login: Login;
  constructor() {
  this.login = InterfaceUtil.getEmptyLoginInterface();
   }
  
  ngOnInit(): void {
  }
loginAction(): void {
  console.log(this.login);
}
}
