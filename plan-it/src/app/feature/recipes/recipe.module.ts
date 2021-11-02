import { SharedModule } from './../../shared/shared.module';
import { RecipeRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesMainComponent } from './recipes-main/recipes-main.component';
import { RecipeDefaultComponent } from './recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

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
