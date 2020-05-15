import { Component, OnInit, Input } from '@angular/core';
import { createVideoScript } from '../../util/util';

@Component({
  selector: 'video-player',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class Video implements OnInit {
  @Input() video: any;
  ngOnInit() {
    createVideoScript();

  }

}
