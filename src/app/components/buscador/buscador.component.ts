import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: []
})
export class BuscadorComponent implements OnInit {

heroes:any[]=[];
termino:string;

@Input() heroe: any = {};
@Input() index: number;

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router:Router
               ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params[ 'termino' ]);
      console.log(this.heroes);


    });

  }

  verHeroe(){
    console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );
      }

}
