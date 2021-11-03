import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesListComponent } from '../../feature/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from '../../feature/recipes/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from '../../feature/recipes/recipes-detail/recipes-detail.component';
import { RecipesMainComponent } from '../../feature/recipes/recipes-main/recipes-main.component';
import { RecipeDefaultComponent } from '../../feature/recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from '../../feature/recipes/recipe-edit/recipe-edit.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from './shared.module';

@NgModule({
    declarations: [
    RecipesMainComponent,
    RecipeDefaultComponent,
    RecipeEditComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    ],
    imports: [
      RouterModule,
      // CommonModule,
      SharedModule,
      ReactiveFormsModule,
      RecipeRoutingModule],
    // exports: [
    //   RecipesMainComponent,
    //   RecipeDefaultComponent,
    //   RecipeEditComponent,
    //   RecipesListComponent,
    //   RecipesItemComponent,
    //   RecipesDetailComponent,
    // ]
})
export class RecipeModule {}
