import { Component, OnInit } from '@angular/core';
// import { Recipe } from 'src/app/services/models/recipe.model';

@Component({
  selector: 'app-recipes-main',
  templateUrl: './recipes-main.component.html',
  styleUrls: ['./recipes-main.component.css']
})
export class RecipesMainComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is a test description', 'https://www.bing.com/images/search?view=detailV2&ccid=2I5UrH7m&id=833C1E0B8F6692CF048D257DD7F724F8A58B97A1&thid=OIP.2I5UrH7mLJRypbErLN1XrgHaN1&mediaurl=https%3a%2f%2fpixy.org%2fsrc%2f106%2f1064915.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d88e54ac7ee62c9472a5b12b2cdd57ae%3frik%3doZeLpfgk99d9JQ%26pid%3dImgRaw%26r%3d0&exph=1580&expw=846&q=free+image+link&simid=608054235541491489&FORM=IRPRST&ck=B4E18BB1EF9A594BBCB2071BFCE91A50&selectedIndex=10')
  // ];
  // selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //     (recipe: Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   );
  }

}
