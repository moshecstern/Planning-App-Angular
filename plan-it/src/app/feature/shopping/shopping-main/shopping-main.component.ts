import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';

@Component({
  selector: 'app-shopping-main',
  templateUrl: './shopping-main.component.html',
  styleUrls: ['./shopping-main.component.css']
})
export class ShoppingMainComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10)
  ];
  constructor() { 

  }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
