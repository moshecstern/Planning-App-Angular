import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../../services/models/recipe.model";
import { Ingredient } from "../models/ingredient.model";
import { ShoppingService } from "./shopping.service";

@Injectable()

export class RecipeService {
// recipeSelected = new EventEmitter<Recipe>();
// recipeSelected = new Subject<Recipe>();
recipesChanged = new Subject<Recipe[]>();
private recipes: Recipe[] = [];

    // private   recipes: Recipe[] = [
    //     new Recipe(
    //         'A Test Recipe', 'This is a test description',
    //         'https://journalistsresource.org/wp-content/uploads/2015/10/Chain-link.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('Soup', 55),
    //         ]
    // ),
    //     new Recipe(
    //         'Another Test Recipe', 'This is a test description',
    //         'https://journalistsresource.org/wp-content/uploads/2015/10/Chain-link.jpg',
    //         [
    //                 new Ingredient('Oil', 3),
    //                 new Ingredient('Soup Nuts', 1),
    //         ])
    //   ];

      constructor(private slService: ShoppingService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
