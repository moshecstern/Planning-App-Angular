import { AuthComponent } from './services/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingMainComponent } from './feature/shopping/shopping-main/shopping-main.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'shopping-list', component: ShoppingMainComponent },
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
