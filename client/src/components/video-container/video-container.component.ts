import { Component, OnInit, Input } from '@angular/core';

const videos: any = [
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'},
  {id: 'Ygo5VcMGMCs'}
];

@Component({
  selector: 'video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {
  videos: any = videos;
  videosPerRow: number = 5;
  @Input() innerWidth: number;

  constructor() { 

   }

  ngOnInit(): void {
  }

}
