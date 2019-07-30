import { Component, OnInit } from '@angular/core';
import { HeroesmarvelService } from '../../services/heroesmarvel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit
{

  heroes: any;
  prev_page: number
  next_page:number;
  total_pages: any;

  pageactual : number

  constructor(public _heroesSV: HeroesmarvelService,
              private _acticeroute:ActivatedRoute,
              private _router: Router)
  {
  
  }

  ngOnInit() 
  { 
    this._acticeroute.params.subscribe(params => {
      let page = +params['page'];
      this.pageactual = page
      if(page == null )
      {
        page = 0;
        this.prev_page = 1;
        this.next_page = 2;
      }
      else
      {
        this.prev_page = page-1;
        this.next_page = page+5;
      }
  
      this.Heroes(page)
    })
  
  }

  Heroes(page:  number)
  {
    this.heroes = null;
    this._heroesSV.getHeroes(page*10).subscribe(
      res=>{
        //console.log(res.data);
        this.heroes = res.data.results
        this.total_pages = null;
        let pages = [];

        let min = page
        let max = page + 4;

        for (let i = 0; i < res.data.total; i++) 
        {
          if(i >= min && i <= max)
          {
            pages.push(i);
          }

        } 

        this.total_pages = pages;
  
      }
    )
  }

  iraheroe(id)
  {
    //console.log(id);
    this._router.navigate(['/heroe', id]);
  }
}
