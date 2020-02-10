import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sing-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import {LogInComponent} from './log-in/log-in.component';



@NgModule({
  declarations: [SignUpComponent, LogInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbToastModule
  ]
})
export class AuthModule { }
