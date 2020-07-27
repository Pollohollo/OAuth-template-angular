import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FeedComponent } from './components/feed/feed.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['feed']);

const routes: Routes = [
  { path: 'create', 
    component: CreateComponent,
    canActivate:[AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}  
  },
  { path: 'feed', component: FeedComponent },
  { path : '**', redirectTo: '/feed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
