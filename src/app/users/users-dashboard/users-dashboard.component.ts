import { Component, OnInit } from '@angular/core';
import { IUser } from '../modelo/iuser';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css'],
})
export class UsersDashboardComponent implements OnInit {
  users_list: IUser[] = [];
  selected_user: IUser | null = null;
  dataSource = new MatTableDataSource<IUser>(this.users_list);
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'phone',
    'website',
    'action',
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe((users) => {
      this.users_list = users;
      this.dataSource.data = this.users_list;
    });
  }

  agregarUsuario(user: IUser) {
    if (user.id) {
      const index = this.users_list.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.users_list[index] = user;
      }
    } else {
      user.id = this.users_list.length + 1;
      this.users_list.push(user);
    }
    this.dataSource.data = [...this.users_list];
  }

  addNewUser() {
    this.selected_user = {
      id: 0,
      name: 'Nuevo Usuario',
      username: 'nuevo_usuario',
      phone: '1234567890',
      website: 'example.com',
    };
  }

  seleccionar_usuario(user: IUser) {
    this.selected_user = { ...user };
  }

  handleUserCancel(event: null) {
    this.selected_user = null;
  }
}
