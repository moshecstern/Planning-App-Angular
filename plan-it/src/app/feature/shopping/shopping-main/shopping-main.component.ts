import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Ingredient } from 'src/app/services/models/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-main',
  templateUrl: './shopping-main.component.html',
  styleUrls: ['./shopping-main.component.css']
})
export class ShoppingMainComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [ ];
  private subscription: Subscription;

  constructor(private slService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        }
      );
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
