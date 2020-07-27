import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { Observable, Subject, of } from 'rxjs';
import { auth } from 'firebase';
import { takeUntil, catchError, filter } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  destroyed$: Subject<null> = new Subject();
  user$: Observable<firebase.User> = this.authService.user$;

  constructor(
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.destroyed$.next();
  }

  logIn(){
    this.authService
    .login()
    .pipe(
      catchError(error => of(null)),
      filter((res) => res),
      takeUntil(this.destroyed$)
    )
    .subscribe((authState: auth.UserCredential) =>{
        this.snackBar.open('Welcome Back', 'OK', {
          duration: 4000
        })
      }
    );
  }

  logout(){
    this.authService
    .logout()
    .pipe(
      catchError(error => of(null)),
      takeUntil(this.destroyed$)
    )
    .subscribe(
      authState =>{
        this.snackBar.open('Come Back', 'OK', {
          duration: 4000
        });
        this.router.navigate(['./feed']);
      }
    );
  }



}
