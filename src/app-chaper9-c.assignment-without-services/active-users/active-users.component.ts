import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }

}
