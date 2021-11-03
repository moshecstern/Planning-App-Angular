import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

import { RecipesResolverService } from 'src/app/services/services/recipes-resolver.service';
import { RecipeDefaultComponent } from '../../feature/recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from '../../feature/recipes/recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from '../../feature/recipes/recipes-detail/recipes-detail.component';
import { RecipesMainComponent } from '../../feature/recipes/recipes-main/recipes-main.component';

const routes: Routes= [
  {
    path: '',
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
