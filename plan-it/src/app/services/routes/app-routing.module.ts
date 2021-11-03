import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { ShoppingMainComponent, RecipeModule } from './services/routes/recipe.module';
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'shopping-list', component: ShoppingMainComponent },
  { path: 'recipes', loadChildren: () => import ('./recipe.module').then(m => m.RecipeModule) },
  { path: 'shopping-list', loadChildren: () => import ('./shopping.module').then(m => m.ShoppingModule) },
  { path: 'auth', loadChildren: () => import ('./auth.module').then(m => m.AuthModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
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
