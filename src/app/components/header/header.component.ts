import { Component,OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    name: string
    urlImage:string

    constructor(private pokemonService : PokemonService){}
    
    ngOnInit(): void {
        
    }

    search(){
      this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
        this.urlImage= data.sprites.front_default;
    })
}

}
