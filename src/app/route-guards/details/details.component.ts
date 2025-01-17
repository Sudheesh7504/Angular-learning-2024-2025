import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  constructor(private authService: AuthService, private router: Router) { }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
