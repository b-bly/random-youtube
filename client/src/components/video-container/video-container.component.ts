import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from 'src/services/video-service';


@Component({
  selector: 'video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {
  @Input() videos: any;
  @Input() videosPerRow: number;
  @Input() innerWidth: number;

  constructor(public videoService: VideoService) { }

  ngOnInit(): void {
  }

  getWidth() {
    return this.videoService.getWidth(this.innerWidth, this.videosPerRow)
  }

  getHeight() {
    return this.videoService.getHeight(this.innerWidth, this.videosPerRow);
  }
}
