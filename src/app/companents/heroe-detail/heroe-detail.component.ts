import { Component, OnInit } from '@angular/core';
import { HeroesmarvelService } from '../../services/heroesmarvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit 
{
  heroe: any;
  myfavoritesheroes: any;
  favorite: boolean;

  constructor(private _heroesSV: HeroesmarvelService,
              private _activeRouter: ActivatedRoute) 
  {
    this.myfavoritesheroes = JSON.parse( localStorage.getItem('heroes'));
  }

  ngOnInit()
  {
    this.geheroe()
  }

  geheroe()
  {
    this._activeRouter.params.subscribe(
      params=>
      {
        let id = params['id'];

       
        this.verificarFavorites(id);
        
        this._heroesSV.getHeroe(id).subscribe(
          res=>
          {
            // Obtengo la data del Heroe y la pongo en la vista
            this.heroe = res.data.results[0]
          }
        )

        
      }
    )
  }

  addfavorite(id: any, name: String)
  {
    let heroe = {'id': id, 'name': name};
    this.myfavoritesheroes.push(heroe);
  //  console.log(this.myfavoritesheroes);
   localStorage.setItem('heroes', JSON.stringify(this.myfavoritesheroes));
   this.verificarFavorites(heroe.id);
    
  }

  verificarFavorites(id: any)
  {
    this.myfavoritesheroes
    // console.log("IDE", id);
    this.favorite = false
    for (const heroe of this.myfavoritesheroes)
    {
      //console.log("Heroe FOR" , heroe.id+" "+ heroe.name);

      if(id == heroe.id)
      {
        this.favorite = true
        //console.log("Favorito");
        break;
      }
      else{
        this.favorite = false
        // console.log("No Favorite");
      }
    }
  }

  removefavorite(id)
  {
    // console.log(id);
    let newFavorite = []
    for (let i = 0; i < this.myfavoritesheroes.length; i++) {
      
      if(id == this.myfavoritesheroes[i].id)
      { 
        continue
      }
      newFavorite.push(this.myfavoritesheroes[i])
    }
    this.myfavoritesheroes = newFavorite;
    localStorage.setItem('heroes',JSON.stringify(this.myfavoritesheroes));
    this.favorite = false
    // console.log("OJO",newFavorite);
  }
}
