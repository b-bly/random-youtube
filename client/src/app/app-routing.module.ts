import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Home } from '../components/home.component';
import { HomeLayout } from '../layouts/home.layout.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Video } from '../components/video/video.component';
import { VideoContainerComponent } from '../components/video-container/video-container.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


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
        VideoContainerComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        YouTubePlayerModule,
        CommonModule,
        BrowserModule,
        // HttpClientModule,
        // FormsModule,
      ],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
