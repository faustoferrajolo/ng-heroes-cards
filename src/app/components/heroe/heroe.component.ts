import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private _heroesService: HeroesService,
               private activatedRoute: ActivatedRoute
               ) {


    this.activatedRoute.params.subscribe( params => {
      //console.log( params['id'] );
      this.heroe = this._heroesService.getHeroe( params['id'] )
      //console.log( this.heroe );

    });
   }



}
