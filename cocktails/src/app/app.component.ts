import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drinks:any[] = []
  query = '';

  // service, dependency injection
  constructor(private cocktail: CocktailService){}

  search(query: string) {
    this.query = query;
    this.cocktail.search(query).subscribe((response) => {
      this.drinks = response;
    })
  }
}
