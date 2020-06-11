import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  dropdownIsOpen = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleDropdown() {
    this.dropdownIsOpen = !this.dropdownIsOpen;
  }

  logout() {
    console.log('logout');
  }
}
