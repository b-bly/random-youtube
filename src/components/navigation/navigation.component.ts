import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  dropdownIsOpen = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  toggleDropdown() {
    this.dropdownIsOpen = !this.dropdownIsOpen;
  }

  logout() {
    this.authService.logout();
    // TODO: navigate home
    this.router.navigate(['/login']);
  }
}
