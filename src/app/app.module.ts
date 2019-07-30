import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './companents/heroes/heroes.component';
import { FavoritosComponent } from './companents/favoritos/favoritos.component';
import { AboutComponent } from './companents/about/about.component';
import { HeroeDetailComponent } from './companents/heroe-detail/heroe-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { ImagePipe } from './pipes/image.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FavoritosComponent,
    AboutComponent,
    HeroeDetailComponent,
    ImagePipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
