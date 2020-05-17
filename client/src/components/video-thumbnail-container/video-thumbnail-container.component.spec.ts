import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoThumbnailContainerComponent } from './video-thumbnail-container.component';


describe('VideoThumbnailContainerComponent', () => {
  let component: VideoThumbnailContainerComponent;
  let fixture: ComponentFixture<VideoThumbnailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoThumbnailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThumbnailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
