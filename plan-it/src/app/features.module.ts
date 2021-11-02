import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./services/auth/auth-interceptor.service";
import { RecipeService } from "./services/recipes.service";
import { ShoppingService } from "./services/shopping.service";

@NgModule({
  providers: [
    ShoppingService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
})
export class FeaturesModule {}
