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
    let width: number =  innerWidth / videosPerRow - 10;
    if (width > 150) { width = 150; }
    return width;
  }

  getHeight(innerWidth: number, videosPerRow: number = 5) {
    const height: number = ((this.getWidth(innerWidth, videosPerRow) / 16) * 9);
    return height;
  }

  getThumbnailUrl(id): string {
    const url: string = 'https://img.youtube.com/vi/' + id + '/default.jpg';
    return url;
  }
}