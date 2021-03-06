import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent{

  @Input() user: firebase.User;
  @Output() logoutClick: EventEmitter<null> = new EventEmitter();

  @Output() userNotAllowed: EventEmitter<null> = new EventEmitter();

  logout(){
    this.logoutClick.emit();
  }

  ngOnChanges(changes){
    this.verification();
  }

  verification(){
    if(!this.user.email.endsWith("@montreal.ca")){
      this.userNotAllowed.emit();
    }
  }
}
