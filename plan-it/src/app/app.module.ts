import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipesListComponent } from './feature/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './feature/recipes/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './feature/recipes/recipes-detail/recipes-detail.component';
import { ShoppingEditComponent } from './feature/shopping/shopping-edit/shopping-edit.component';
import { ShoppingComponent } from './feature/shopping/shopping/shopping.component';
import { RecipesMainComponent } from './feature/recipes/recipes-main/recipes-main.component';
import { ShoppingMainComponent } from './feature/shopping/shopping-main/shopping-main.component';

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
    ShoppingMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
