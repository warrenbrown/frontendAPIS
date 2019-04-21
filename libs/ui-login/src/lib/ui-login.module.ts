import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@workshop/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ]
})
export class UiLoginModule {}
