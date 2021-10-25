// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './models/ingredient.model';

export class ShoppingService {
// ingredientSelected = new EventEmitter<Ingredient>();
// ingredientChanged = new EventEmitter<Ingredient[]>();
ingredientChanged = new Subject<Ingredient[]>();

    private ingredient: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Oranges', 10)
      ];

      getIngredients() {
          return this.ingredient.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredient.push(ingredient);
          // this.ingredientChanged.emit(this.ingredient.slice());
          this.ingredientChanged.next(this.ingredient.slice());

      }

      addIngredients(ingredients: Ingredient[]) {
        this.ingredient.push(...ingredients);
        this.ingredientChanged.next(this.ingredient.slice());
    }
}
