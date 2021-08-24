import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { TokenService } from '@core/services/token.service';
import { LoginService } from '@feature/login/shared/services/login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router){

  };
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error('Method not implemented.');
    const hasSession:boolean = this.loginService.hasSession();
    if(!hasSession){
      this.router.navigate(['/login'])
    }
    return true;
  }
  
  
}
