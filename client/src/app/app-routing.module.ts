import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from '../components/home.component';
import { HomeLayout } from '../layouts/home.layout.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Video } from '../components/video/video.component';
import { VideoContainerComponent } from '../components/video-container/video-container.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { VideoThumbnailComponent } from '../components/video-thumbnail/video-thumbnail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoService } from '../services/video-service';
import { VideoThumbnailContainerComponent } from 'src/components/video-thumbnail-container/video-thumbnail-container.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '', component: Home,
      },
    ]
  }
];

@NgModule({
      declarations: [
        Home,
        Video,
        VideoContainerComponent,
        VideoThumbnailComponent,
        VideoThumbnailContainerComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        YouTubePlayerModule,
        CommonModule,
        BrowserModule,
        FontAwesomeModule,
        // HttpClientModule,
        // FormsModule,
      ],
      providers: [
        VideoService
      ],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
