import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { RecipesResolverService } from 'src/app/services/recipes-resolver.service';
import { RecipeDefaultComponent } from './recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesMainComponent } from './recipes-main/recipes-main.component';

const routes: Routes= [
  {
    path: 'recipes',
    component: RecipesMainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeDefaultComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipesDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ]
  }]

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class RecipeRoutingModule {}
