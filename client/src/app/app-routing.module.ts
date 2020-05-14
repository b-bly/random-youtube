import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Home } from '../components/home.component';
import { HomeLayout } from '../layouts/home.layout.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Video } from '../components/video.component';


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
        Video
      ],
      imports: [
        RouterModule.forRoot(routes),
        YouTubePlayerModule,
      ],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
