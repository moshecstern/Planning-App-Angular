import { HeaderComponent } from './feature/core/header/header.component';
import { FeaturesModule } from './features.module';
import { SharedModule } from './services/routes/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './services/routes/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
