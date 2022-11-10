import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, AuthRoutingModule, RouterModule],
  exports: [AuthRoutingModule, RouterModule],
})
export class AuthModule {}
