import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { LoadingSpinner } from './loadingSpinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    HeaderComponent,
    LoadingSpinner,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    DropdownDirective,
    HeaderComponent,
    LoadingSpinner,
    PlaceholderDirective
  ],
  entryComponents: [
    AlertComponent
  ]
})

export class SharedModule {}
