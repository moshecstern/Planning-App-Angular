import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: AuthComponent }
    ]),
    SharedModule
  ]
})

export class AuthModule{}
