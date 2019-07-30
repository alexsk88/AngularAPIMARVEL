import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'heroesfavoritos';

  constructor()
  {
    let user = localStorage.getItem('user');

    if(!user || user == null)
    {
      let user = {
        'name': 'Usuario Nuevo'
      }

      let heores = []
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('heroes',JSON.stringify(heores));
    }
  }
}
