import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/services/models/ingredient.model';

@Component({
  selector: 'app-shopping-main',
  templateUrl: './shopping-main.component.html',
  styleUrls: ['./shopping-main.component.css']
})
export class ShoppingMainComponent implements OnInit {
  ingredients: Ingredient[] = [ ];
  constructor(private slService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        }
      );
  }
}
