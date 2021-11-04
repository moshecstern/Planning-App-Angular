import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from '../../shared/placeholder/placeholder.directive';
import { LoadingSpinner } from '../../shared/loadingSpinner/loading-spinner.component';
// import { HeaderComponent } from '../../shared/header/header.component';
import { DropdownDirective } from '../../shared/dropdown/dropdown.directive';
import { AlertComponent } from '../../shared/alert/alert.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    // HeaderComponent,
    LoadingSpinner,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    DropdownDirective,
    // HeaderComponent,
    LoadingSpinner,
    PlaceholderDirective,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class SharedModule {}
