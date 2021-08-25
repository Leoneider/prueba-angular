import { UserResponse } from './../../models/createUserResponse.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.interface';
import { UserList } from '../../models/prueba.interface';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor( private httpService: HttpClient ){}

  
  getUsers():Promise<UserList> {
    return new Promise ((resolve) => {
      this.httpService.get(`${environment.API}/users?page=2`).subscribe( (res:UserList) => resolve(res));
    })
  }

  createUser(data:any):Promise<UserResponse> {
    return new Promise ((resolve) => {
      this.httpService.post<UserResponse>(`${environment.API}/users`, data).subscribe( res => {
        resolve(res)
      });
    })
  }

  deleteUserForIndex(index: number) {
    return this.httpService.delete(`${environment.API}/users/${index}`);
  }
}
