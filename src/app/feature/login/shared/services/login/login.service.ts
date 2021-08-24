import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '@core/services/token.service';
import { environment } from '@environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private httpService: HttpClient, private tokenService: TokenService) { }

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(data:any) {
    return this.httpService.post(`${environment.API}/login`, data).pipe(
      tap(( data:{token:string}) => {
        const token = data.token;
        this.tokenService.saveToken(token);
      })

    );
  }

  hasSession() {
     const token = localStorage.getItem('token');
      return ( token ) ?  true :  false;
  }


}
