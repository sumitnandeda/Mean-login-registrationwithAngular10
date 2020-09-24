import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TypicodeInterceptor } from './typicode.interceptor';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { TopnavbarComponent } from './layouts/topnavbar/topnavbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    TopnavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TypicodeInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
