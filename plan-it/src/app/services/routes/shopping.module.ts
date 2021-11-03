import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from '../../shared/shared.module';
import { ShoppingEditComponent } from "../../feature/shopping/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "../../feature/shopping/shopping-list/shopping-list.component";
import { ShoppingMainComponent } from "../../feature/shopping/shopping-main/shopping-main.component";

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
    {path: '', component: ShoppingMainComponent }
  ])
]
  // imports: [RouterModule, CommonModule, ReactiveFormsModule],
})
export class ShoppingModule {}
