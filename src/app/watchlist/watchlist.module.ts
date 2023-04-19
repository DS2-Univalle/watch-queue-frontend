import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { ToWatchComponent } from './components/to-watch/to-watch.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { WatchedComponent } from './components/watched/watched.component';
import { LibraryComponent } from './components/library/library.component';


@NgModule({
  declarations: [
    ToWatchComponent,
    FavoritesComponent,
    WatchedComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule
  ]
})
export class WatchlistModule { }
