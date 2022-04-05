import { Component } from '@angular/core';

@Component({
    selector: 'lifecycle',
    templateUrl: './lifecycle.component.html',
})
export class LifecycleComponent {


    code0 = `@Component({
  selector: 'photo-gallery',
  template: 'photo-gallery.component.html',
})
export class PhotoGalleryComponent {
  ...

  constructor() {
      this.galleryId = 0;
      this.photos = [];
  }
  ...
}`

    code1 = `@Component({
    selector: 'photo-gallery',
    template: 'photo-gallery.component.html',
  })
  export class PhotoGalleryComponent implement OnInit {
    ...
  
    ngOnInit() {
        this.photos = fetchPhotos(this.galleryId);
    }
    ...
  }`

    code2 = `@Component({
    selector: 'photo-gallery',
    template: 'photo-gallery.component.html',
  })
  export class PhotoGalleryComponent implements DoCheck {
    ...
  
    ngDoCheck() {
        // This part is called every time anything in the component is updated

        if(this.galleryId !== this.oldGalleryId) {

            // This part is called only when the galleryId is changed
            this.photos = fetchPhotos(this.galleryId);
            this.oldGalleryId = this.galleryId;
        }
    }
    ...
  }`

    code3 = `@Component({
    selector: 'photo-gallery',
    template: 'photo-gallery.component.html',
  })
  export class PhotoGalleryComponent implements OnDestroy {
    ...
  
    ngOnDestroy() {
        ...
        clearInterval(this.refreshInterval);
    }
    ...
  }`
}

