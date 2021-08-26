import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../create-user/shared/services/users/users.service';
import { debounceTime } from 'rxjs/operators';
import { User } from '../create-user/shared/models/user.interface';


@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  constructor( private usersService: UsersService){}
  // users$: Observable<any[]>;

  searchUser = new FormControl('');

  users:User[] =[] 

  filter:string = "";

  async ngOnInit(){
    this.getUsers();
    this.inputSearch();
    
  }

  inputSearch(){
    this.searchUser.valueChanges.pipe( debounceTime(300) ).subscribe( res => {
      this.filter = res;
    })
  }

  async getUsers(){
    this.users =  (await this.usersService.getUsers()).data;

    console.log("USERS", this.users);
    
  }


  deleteUser(i:number){
    let userEliminado:any = this.users.splice(i, 1)[0];
     this.usersService.deleteUserForIndex(userEliminado.id).subscribe( () => {

      this.users = this.users.filter( user => {
        return user.id != userEliminado.id;
      })

      this.alert(userEliminado)
    });


  }

  isDeleteUser: boolean = false;
  messageAlert = "";
  alert(user:any){
    this.isDeleteUser = true;
    this.messageAlert = `Delete user: ${user.first_name}`
    setTimeout(() => {
      this.isDeleteUser = false;
    }, 3000);

  }



}
