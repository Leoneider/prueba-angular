import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor( private httpService: HttpClient ){}

  
  getUsers() {
    return this.httpService.get(`${environment.API}/users?page=2`).pipe(
      map( (data:any) => data.data)
    );
  }

  createUser() {

  }

  deleteUserForIndex(index: number) {
    return this.httpService.delete(`${environment.API}/users/${index}`)
  }
}
