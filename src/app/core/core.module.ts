import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenGuard } from './guard/token/token.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [TokenGuard]
})
export class CoreModule { }
