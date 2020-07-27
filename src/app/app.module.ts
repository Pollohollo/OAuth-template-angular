import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppMaterialModule } from './app-material.module';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './components/create/create.component';
import { FeedComponent } from './components/feed/feed.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AppFirebaseModule } from './app-firebase.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    FeedComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppFirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
