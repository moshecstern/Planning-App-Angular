import { AuthGuard } from './services/auth/auth.guard';
import { AuthComponent } from './services/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDefaultComponent } from './feature/recipes/recipe-default/recipe-default.component';
import { RecipesDetailComponent } from './feature/recipes/recipes-detail/recipes-detail.component';
import { RecipesMainComponent } from './feature/recipes/recipes-main/recipes-main.component';
import { ShoppingMainComponent } from './feature/shopping/shopping-main/shopping-main.component';
import { RecipeEditComponent } from './feature/recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './services/recipes-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
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
  },
  { path: 'shopping-list', component: ShoppingMainComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// const routes: Routes = [
//   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
//   { path: 'recipes', component: RecipesMainComponent, children: [
//     {path: '', component: RecipeDefaultComponent},
//     { path: 'new', component: RecipeEditComponent },
//     { path: ':id', component: RecipesDetailComponent, resolve: [RecipesResolverService] },
//     { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
//   ] },
//   { path: 'shopping-list', component: ShoppingMainComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
