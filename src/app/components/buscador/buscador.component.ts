import { HeroesService } from './../../services/heroes.services';
import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  heroes:any[] = [];
  termino:string;


  constructor( private ActivatedRoute:ActivatedRoute,
               private _heroesService:HeroesService) {



   }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe( params =>{
      //console.log( 'termino' );
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      //console.log(this.heroes);

    })
  }

}
