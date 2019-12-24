import { Component } from '@angular/core';
import { ThemeService } from './services/theme-service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private themeService: ThemeService,
        private http: HttpClient
    ) { }

    /**
     * Change theme as per provide color pallete
     * @param themeID 
     */
    public useTheme(themeID: string) {
        this.http.get(`assets/theme/${themeID}.json`).subscribe((res) => {
            this.themeService.setTheme(res);
        });
    }
}
