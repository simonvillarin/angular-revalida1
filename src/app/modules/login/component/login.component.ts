import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { 
  hasLowercaseValidator, 
  hasNumberValidator, 
  hasUppercaseValidator 
} from '../../validators/custom.validator'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //password icon
  hide = true;
  customColor = '#4CAF50';
  image = 'login/src/assets/images/img.svg'

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8), 
        hasLowercaseValidator(), 
        hasNumberValidator(), 
        hasUppercaseValidator()
      ]]
    })
  }

  get username() {
    return this.loginForm.get('username') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    if(this.loginForm.valid) {
      this.router.navigate(['login']);
      console.log('Successfully logged in.')
    }
  }

  forgotPassword = () => {
    this.router.navigate(['forgot/password'])
  } 

  signUp = () => {

  }
}
