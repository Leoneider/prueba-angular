import { LoginResponse } from './../shared/models/login.interface';
import { LoginService } from '@feature/login/shared/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private readonly router: Router, 
    private loginService: LoginService, 
    private tokenService: TokenService ) {
    
    }
  ngOnInit(): void {
    this.construirFormularioLogin();
    this.redirectPageIsLogued();
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  redirectPageIsLogued(){
    if(localStorage.getItem('token')){
      this.redirectUsers()
    }
  }

  construirFormularioLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  login(loginResponse:LoginResponse) {
    console.log("Ejeuta funcion login", loginResponse );
    this.tokenService.saveToken(loginResponse.token);
    this.redirectUsers();
  }

  loginResponse:LoginResponse;
  async sendLoginForm(){
    if(this.loginForm.valid){
      console.log("Ejeuta funcion prueba");
      this.loginResponse = await this.loginService.login(this.loginForm.value);
      this.login(this.loginResponse);
    }else{
      this.loginForm.markAllAsTouched();
    }
    
  }

  get emailInvalid(){
    return this.loginForm.get('email').invalid && this.loginForm.get('email').touched;
  }

  get passwordInvalid(){
    return this.loginForm.get('password').invalid && this.loginForm.get('password').touched;
  }

  get emailRequired(){
    return this.loginForm.get('email').hasError('required') && this.loginForm.get('email').touched;
  }

  get emailMinLength(){
    return this.loginForm.get('email').hasError('minlength') && this.loginForm.get('email').touched;
  }

  get passwordRequired(){
    return this.loginForm.get('password').hasError('required') && this.loginForm.get('password').touched;
  }

  get passwordMinLength(){
    return this.loginForm.get('password').hasError('minlength') && this.loginForm.get('password').touched;
  }




}
