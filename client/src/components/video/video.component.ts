import { Component, OnInit, Input } from '@angular/core';
import { createVideoScript } from '../../util/util';

@Component({
  selector: 'video-player',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class Video implements OnInit {
  @Input() video: any;
  @Input() videosPerRow: number = 1;
  @Input() innerWidth: number;

  ngOnInit() {
    createVideoScript();

  }

  getWidth() {
    const width =  this.innerWidth / this.videosPerRow;
    console.log('width:')
    console.log(width)
    return width;
  }

  getHeight() {
    const height = (this.getWidth() / 16) * 9;
    return height;
  }

}
