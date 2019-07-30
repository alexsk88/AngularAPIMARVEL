import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './companents/heroes/heroes.component';
import { FavoritosComponent } from './companents/favoritos/favoritos.component';
import { AboutComponent } from './companents/about/about.component';
import { HeroeDetailComponent } from './companents/heroe-detail/heroe-detail.component';


const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'heroes/:page', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeDetailComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'informacion', component: AboutComponent },
  { path: '**', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


