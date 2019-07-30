import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  nameUser: String;
  isDisabled= true

  misheroes: any;
  constructor()
  {

  }

  ngOnInit()
  {
    let user = JSON.parse( localStorage.getItem('user'));
    //console.log(user);
    this.nameUser = user.name
    this.obtenermyFavorites();
  }

  editaruser(name)
  {
    this.isDisabled = !this.isDisabled
    // console.log("Nombre"+ name);
    this.localsave(name);
  }

  savename(name)
  {
    this.isDisabled = !this.isDisabled
    this.localsave(name);
  }

  localsave(name)
  {
    this.nameUser = name;
    let user = {
      'name': this.nameUser
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  obtenermyFavorites()
  {
    this.misheroes= JSON.parse( localStorage.getItem('heroes'))
  }
}
