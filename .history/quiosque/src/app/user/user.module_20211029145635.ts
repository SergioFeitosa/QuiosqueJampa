import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserReadComponent } from './user-read/user-read.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserReadComponent,
    UserReadComponent,
    UserReadComponent,
  ]
})
export class UserModule { }
