import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createVideoScript } from 'src/util/util';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  videoId: string;
  height: string;
  width: string;
  faArrowLeft = faArrowLeft;

  constructor(  private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    //TODO: may need to check to make sure script tag for youtube video has been added.
    createVideoScript();

    this.initializeVariables();
  }

  initializeVariables() {
    this.route.params.subscribe(params => { 
      this.videoId = params.id;
    });
  }

  back() {
    this.router.navigate(['/']);
  }
}
