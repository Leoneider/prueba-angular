import { UserResponse } from './shared/models/createUserResponse.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../create-user/shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private readonly router: Router, private usersService: UsersService) {}
  ngOnInit(): void {
    this.construirFormularioUser();
    // throw new Error('Method not implemented.');
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  construirFormularioUser() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
    });
  }

  async submitUserForm() {
    await this.alert(await this.usersService.createUser(this.userForm.value));
    this.redirectToListUsers();
    this.userForm.reset();
  }

  isDeleteUser: boolean = false;
  messageAlert = '';
  alert(user:UserResponse) {
    this.isDeleteUser = true;
    this.messageAlert = `User add: ${user.name}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        this.isDeleteUser = false;
        resolve(this.isDeleteUser);
      }, 900);
    });
  }


  get nameRequired(){
    return this.userForm.get('name').hasError('required');
  }

  get jobRequired(){
    return this.userForm.get('job').hasError('required');
  }
}
