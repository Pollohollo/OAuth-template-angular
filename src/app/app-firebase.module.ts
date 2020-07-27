import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { initializeApp } from 'firebase';
import { environment } from '../environments/environment.prod';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [AngularFireAuthModule]
})
export class AppFirebaseModule { }
