import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingService } from '../../../services/services/shopping.service';
import { Ingredient } from '../../../services/models/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
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

onEditItem(index: number) {
  this.slService.startedEditing.next(index);
}
}
