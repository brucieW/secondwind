import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PerformancesComponent} from './performances/performances.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {MusicalDirectorsComponent} from './musical-directors/musical-directors.component';
import {MemberNewsComponent} from './member-news/member-news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'performances',
    component: PerformancesComponent
  },
  {
    path: 'photos',
    component: PhotoGalleryComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'musical-directors',
    component: MusicalDirectorsComponent
  },
  {
    path: 'member-news',
    component: MemberNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
