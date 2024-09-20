import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Input() user: IUser = {
    id: 0,
    name: '',
    username: '',
    phone: '',
    website: '',
  };
  @Output() submitUser = new EventEmitter<IUser>();
  @Output() cancelUser = new EventEmitter<null>();

  enviar() {
    this.submitUser.emit(this.user);
  }

  cancelar(){
    this.cancelUser.emit(null);
  }
}
