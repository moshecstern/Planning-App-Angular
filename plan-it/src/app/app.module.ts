import { FeaturesModule } from './features.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './services/auth/auth.component';
import { RecipeModule } from './feature/recipes/recipe.module';
import { ShoppingModule } from './feature/shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    RecipeModule,
    ShoppingModule,
    FeaturesModule
  ],

  bootstrap: [AppComponent],
  // entryComponents: [
  //   AlertComponent
  // ]
})
export class AppModule { }
