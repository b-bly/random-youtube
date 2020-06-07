import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../../services/video-service';

@Component({
  selector: 'video-thumbnail-container',
  templateUrl: './video-thumbnail-container.component.html',
  styleUrls: ['./video-thumbnail-container.component.scss']
})
export class VideoThumbnailContainerComponent implements OnInit {
  @Input() videos: any;
  @Input() videosPerRow: number;
  @Input() innerWidth: number;

  constructor(public videoService: VideoService) { 

   }

  ngOnInit(): void {
  }

  getWidth() {
    return this.videoService.getWidth(this.innerWidth, this.videosPerRow)
  }

  getHeight() {
    return this.videoService.getHeight(this.innerWidth, this.videosPerRow);
  }

  getThumbnailUrl(videoId) {
    return this.videoService.getThumbnailUrl(videoId);
  }
}

// Try replacing with directive?

//https://medium.com/javascript-everyday/reusable-components-with-configurable-templates-in-angular-3c55741c97f3