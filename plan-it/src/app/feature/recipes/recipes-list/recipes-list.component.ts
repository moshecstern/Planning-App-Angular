import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://journalistsresource.org/wp-content/uploads/2015/10/Chain-link.jpg'),
    new Recipe('Another Test Recipe', 'This is a test description', 'https://journalistsresource.org/wp-content/uploads/2015/10/Chain-link.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
