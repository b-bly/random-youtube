import { Component, OnInit, HostListener } from '@angular/core';
import { createVideoScript } from 'src/util/util';
import * as queryString from 'query-string';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { VideoService } from '../services/video-service';


// TODO: Add google font

// for testing

// const videos: any = [
//   {id: 'Ygo5VcMGMCs'},
//   {id: 'Ygo5VcMGMCs'},
//   {id: 'Ygo5VcMGMCs'},
//   {id: 'Ygo5VcMGMCs'},
//   {id: 'Ygo5VcMGMCs'}
// ];

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Home implements OnInit {
  innerWidth: number = window.innerWidth || 100;
  videos: any;
  videosPerRow: number = 5;
  user: any;

  constructor(private router: Router, 
    private authService: AuthService,
    ) { }

  async ngOnInit() {
    createVideoScript();
    await this.getUser();
    await this.getMovies();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  async getUser() {
    this.user = await this.authService.getUser();
    if (this.user.loggedIn == false) {
      this.router.navigate(['/login'])
    }
  }

  async getMovies() {
    if (this.user.loggedIn == true) {
      const movies: any = await this.authService.getMovies();
      // data.data.items[0].snippet.resourceId.videoId
      this.videos = movies.data.data.items.slice(0,5);
    }
  }

  async testApi() {
    await this.authService.test();
  }
}
