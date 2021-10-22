import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "src/app/services/models/recipe.model";
import { Ingredient } from "./models/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Injectable()

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private   recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 'This is a test description', 
            'https://journalistsresource.org/wp-content/uploads/2015/10/Chain-link.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Soup', 55),
            ]
    ),
        new Recipe(
            'Another Test Recipe', 'This is a test description', 
            'https://journalistsresource.org/wp-content/uploads/2015/10/Chain-link.jpg', 
            [
                    new Ingredient('Oil', 3),
                    new Ingredient('Soup Nuts', 1),
            ])
      ];

      constructor(private slService: ShoppingService) {}

      getRecipes() {
          return this.recipes.slice(); 
      }

      getRecipe(index: number) {
        return this.recipes.slice()[index]; 
    }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}