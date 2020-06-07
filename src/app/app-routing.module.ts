import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from '../components/home.component';
import { HomeLayout } from '../layouts/home.layout.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { VideoThumbnailComponent } from '../components/video-thumbnail/video-thumbnail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoService } from '../services/video-service';
import { VideoThumbnailContainerComponent } from 'src/components/video-thumbnail-container/video-thumbnail-container.component';
import { PlayVideoComponent } from '../components/play-video/play-video.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../components/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: HomeLayout,
    children: [
      {
        path: '', component: LoginComponent,
      }

    ]
  },
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: 'video/:id', component: PlayVideoComponent,
      },
      {
        path: '', component: Home,
      },

    ]
  },
 
];

@NgModule({
      declarations: [
        HomeLayout,
        Home,
        VideoThumbnailComponent,
        VideoThumbnailContainerComponent,
        PlayVideoComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        CommonModule,

        YouTubePlayerModule,
        FontAwesomeModule,
        // FormsModule,
      ],
      providers: [
        VideoService
      ],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
