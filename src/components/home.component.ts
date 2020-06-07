import { Component, OnInit, HostListener } from '@angular/core';
import { createVideoScript } from 'src/util/util';
import * as queryString from 'query-string';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { VideoService } from '../services/video-service';


// TODO: Add google font

const videos: any = [
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'}
];

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Home implements OnInit {
  innerWidth: number = window.innerWidth || 100;
  videos: any = videos;
  videosPerRow: number = 5;

  constructor(private router: Router, 
    private authService: AuthService,
    // private videoService: VideoService
    ) { }

  async ngOnInit() {
    createVideoScript();
    const response = await this.authService.getMovies();
    console.log(response);
    
    await this.testApi();

    var query: any = queryString.parse(this.router.url);

    console.log('url parsed: ')
    console.log(query);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  async testApi() {
    await this.authService.test();
  }
}
