import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';


Injectable(
  {
  providedIn: 'root'
}
)
export class VideoService {
  constructor(
    // protected http: HttpClient
    ) {
    // super(http);
  }

  getWidth(innerWidth: number, videosPerRow: number = 5) {
    const width =  innerWidth / videosPerRow - 10;
    return width;
  }

  getHeight(innerWidth: number, videosPerRow: number = 5) {
    const height = ((this.getWidth(innerWidth, videosPerRow) / 16) * 9);
    return height;
  }

  getThumbnailUrl(id): string {
    const url: string = 'https://img.youtube.com/vi/' + id + '/default.jpg';
    return url;
  }
}