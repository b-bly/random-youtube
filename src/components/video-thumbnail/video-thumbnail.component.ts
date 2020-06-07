import { Component, OnInit, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() video: any;
  @Input() height: number;
  @Input() width: number;
  @Input() thumbnailUrl: string;
  faPlay = faPlay;
  
  constructor() { }

  ngOnInit(): void {
  }
}


// VIDEO URL

// https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api

// ../node_modules/font-awesome/css/font-awesome.css