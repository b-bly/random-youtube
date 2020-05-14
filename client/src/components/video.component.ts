import { Component, OnInit } from '@angular/core';
import { createVideoScript } from '../util/util';

@Component({
  selector: 'video-player',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class Video implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    // createVideoScript();
  }

}
