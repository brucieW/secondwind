import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PerformancesComponent } from './performances/performances.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MusicalDirectorsComponent } from './musical-directors/musical-directors.component';
import { MemberNewsComponent } from './member-news/member-news.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

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
    SideBarComponent,
    RootNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
