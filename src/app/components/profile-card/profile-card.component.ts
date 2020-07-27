import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {

  @Input() user: firebase.User;
  @Output() logoutClick: EventEmitter<null> = new EventEmitter();

  logout(){
    this.logoutClick.emit();
  }
}
