import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  dropdownIsOpen = false;
  user: any = {loggedIn: null, name: null};

  constructor(private authService: AuthService,
    private router: Router) { }

  async ngOnInit() {
    this.user = await this.getUser();
  }
  
  toggleDropdown() {
    this.dropdownIsOpen = !this.dropdownIsOpen;
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  async getUser() {
    return await this.authService.getUser();
  }
}
