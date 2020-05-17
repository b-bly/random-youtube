import { Component, OnInit, HostListener } from '@angular/core';
import { createVideoScript } from 'src/util/util';

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

  ngOnInit() {
    console.log(window.innerWidth);
    createVideoScript();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
