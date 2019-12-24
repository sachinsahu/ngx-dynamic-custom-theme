import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { FnCustomModule } from './foundation/custom-module';
import { ThemeService } from './services/theme-service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FnCustomModule.forRoot(),
        HeaderModule
    ],
    providers: [ThemeService],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() {
    }
}


