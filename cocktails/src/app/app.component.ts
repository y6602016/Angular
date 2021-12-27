import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drinks:any[] = []

  // service, dependency injection
  constructor(private cocktail: CocktailService){}

  search(query: string) {
    this.cocktail.search(query).subscribe((response: any) => {
      this.drinks = response.drinks;
    })
  }
}
