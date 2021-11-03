// import { RecipeService } from './../../../services/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../services/models/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
