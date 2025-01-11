import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {


  constructor(private usersService: UsersService) { }
  users = this.usersService.users;
}
