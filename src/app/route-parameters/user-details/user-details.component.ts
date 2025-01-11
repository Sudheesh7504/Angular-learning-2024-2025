import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  user: any;

  ngOnInit() {
    let uid = this.route.snapshot.paramMap.get('id');
    this.user = this.usersService.users.find((u) => u.id === uid)
  }
}
