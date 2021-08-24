import { LoginService } from '@feature/login/shared/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private readonly router: Router, private loginService: LoginService ) {}
  ngOnInit(): void {
    this.construirFormularioLogin();
    // throw new Error('Method not implemented.');
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  construirFormularioLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl('eve.holt@reqres.in', [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
      ]),
      password: new FormControl('cityslicka', [Validators.required, Validators.minLength(8)]),
    });
  }

  submitLoginForm() {
    console.log('Datos del formulario: ', this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe( res => {
      console.log("Logueando Usuario", res);
      this.router.navigateByUrl('/users');

      
    });

  }

  get emailValid(){
    return this.loginForm.get('email').valid && this.loginForm.get('email').touched;
  }

  get passwordValid(){
    return this.loginForm.get('password').valid && this.loginForm.get('password').touched;
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
