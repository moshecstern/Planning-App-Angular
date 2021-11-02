import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
  // loadedFeature = 'recipe';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
// export class AppComponent implements OnInit {
//   loadedRecipes = [];
//   constructor(private http: HttpClient) {
//   }
//   ngOnInit(){}
//   onCreateRecipe(postData: Recipe) {
//     this.http.post('https://plan-it-44db4-default-rtdb.firebaseio.com/', postData);
//   }

//   onFetchPosts(){
//     // send http request
//   }
//   // title = 'plan-it';
//   // loadedFeature = 'recipe';
//   // onNavigate(feature: string) {
//   //   this.loadedFeature = feature;
//   // }
// }
