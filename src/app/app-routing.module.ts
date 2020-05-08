import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Home } from '../components/home.component';
import { HomeLayout } from '../layouts/home.layout.component';


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
      ],
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
