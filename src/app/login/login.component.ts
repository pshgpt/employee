import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginId:["",[Validators.required]],
      password:["",[Validators.required]]

    });
  }
  book()
  {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.loginId.value == 'admin@gmail.com' && this.loginForm.controls.password.value == 'admin') {
        this.router.navigate(['index']);
    }else {
      this.invalidLogin = true;
    }
    
  }

}