import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
                 UserReadComponent]
})
export class UserModule { }
