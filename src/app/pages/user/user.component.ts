import { Component, OnInit } from '@angular/core';
import * as usersData from '../../../assets/users.json'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userProfile: any; 

  isEditing: boolean = false;

  editedUser: any = {};

  constructor() { }

  ngOnInit() {
    this.userProfile = usersData;
    this.editedUser = { ...usersData };
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    console.log('Simulación: Usuario actualizado exitosamente', this.editedUser);
  }
}
