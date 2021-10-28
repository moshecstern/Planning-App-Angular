import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipesListComponent } from './feature/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './feature/recipes/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './feature/recipes/recipes-detail/recipes-detail.component';
import { ShoppingEditComponent } from './feature/shopping/shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './feature/shopping/shopping-list/shopping-list.component';
import { RecipesMainComponent } from './feature/recipes/recipes-main/recipes-main.component';
import { ShoppingMainComponent } from './feature/shopping/shopping-main/shopping-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { ShoppingService } from './services/shopping.service';
import { RecipeDefaultComponent } from './feature/recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './feature/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './services/recipes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    ShoppingEditComponent,
    ShoppingComponent,
    RecipesMainComponent,
    ShoppingMainComponent,
    DropdownDirective,
    RecipeDefaultComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
