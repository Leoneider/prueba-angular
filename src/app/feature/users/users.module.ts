import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [HomeUserComponent, NavBarComponent, CreateUserComponent, ListUsersComponent],
  imports: [ CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
