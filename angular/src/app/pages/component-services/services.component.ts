import { Component } from '@angular/core';

@Component({
    selector: 'services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {


    code0 = `export class PictureService {
        private pictures: Picture[] = []
        constructor(private http: HttpClient) {}

        getPictures() {
            this.http.get('/api/pictures').then(p: Picture[] => {
                this.pictures = push(p);
            });
            return this.pictures;
        }
    }`;
    
}

