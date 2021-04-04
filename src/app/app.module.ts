import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PerformancesComponent } from './performances/performances.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MusicalDirectorsComponent } from './musical-directors/musical-directors.component';
import { MemberNewsComponent } from './member-news/member-news.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PerformancesComponent,
    PhotoGalleryComponent,
    SponsorsComponent,
    ContactUsComponent,
    MusicalDirectorsComponent,
    MemberNewsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
