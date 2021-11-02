import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingMainComponent } from "./shopping-main/shopping-main.component";

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent,
    ShoppingMainComponent
  ],
  imports: [
    // CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
    {path: 'shopping-list', component: ShoppingMainComponent }
  ])
]
  // imports: [RouterModule, CommonModule, ReactiveFormsModule],
})
export class ShoppingModule {}
