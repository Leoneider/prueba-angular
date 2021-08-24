
import { SharedModule } from '@shared/shared.module';

import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '@feature/login/login-routing.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';



@NgModule({
    declarations: [LoginComponent],
    imports: [
      CommonModule,
      LoginRoutingModule,
      SharedModule
    ]
  })
export class LoginModule {
}
