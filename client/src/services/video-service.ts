import { Injectable } from '@angular/core';


Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor() {}

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