import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDefaultComponent } from './feature/recipes/recipe-default/recipe-default.component';
import { RecipesDetailComponent } from './feature/recipes/recipes-detail/recipes-detail.component';
import { RecipesMainComponent } from './feature/recipes/recipes-main/recipes-main.component';
import { ShoppingMainComponent } from './feature/shopping/shopping-main/shopping-main.component';
import { RecipeEditComponent } from './feature/recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesMainComponent, children: [
    {path: '', component: RecipeDefaultComponent},
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipesDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
