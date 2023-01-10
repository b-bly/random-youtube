import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'home-layout',
  templateUrl: './home.layout.component.html',
  styleUrls: ['./home.layout.component.scss']
})
export class HomeLayout {
  title = 'movie-app';
}
